const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//alternate syntax for exporting controller functions
module.exports = {
    register: (req, res) => {
        //use the object passed in to create a user instance 
        //this triggers our virtual field creation
        const newUser = new User(req.body);
        console.log(newUser);

        //this is saving to the db and will trigger the 'pre' save functions
        newUser.save()
            .then(() => {
                console.log("successful registration");
                res.json({
                    message: "Successfully registered",
                    user: newUser,
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    login: (req, res) => {
        //find the email that they are trying to login with, then verify pswd, return success with cookie as proof
        User.findOne({ email: req.body.email })
            .then((user) => {
                if(user === null) {
                    res.status(400).json({ message: "Invalid Login Attempt - 1"})
                } else {
                    //else found a valid use with that email address
                    //verify password is valid
                    bcrypt.compare(req.body.password, user.password)
                        .then((isPasswordValid) => {
                            //successfully compared values but the boolean tells us if they match
                            if(isPasswordValid === true) {
                                console.log("password is valid");
                                //create a cookie object, call it whatever you want, 2nd piece of cookie is
                                res.cookie("usertoken", 
                                    jwt.sign({
                                        //1st item, we can save anything we want in this object and it will be a part of the cookie
                                        _id: user._id,
                                        username: user.username,
                                        email: user.email
                                        },
                                        process.env.JWT_SECRET), //2nd item in cookie
                                        {
                                            // 3rd item, these are options for this response cookie
                                            httpOnly: true,
                                            expires: new Date(Date.now() + 600000) //time until they have to login again
                                        })
                                        // this json is returned as res.data
                                        .json({
                                            message: "Successfully logged in",
                                            userLoggedIn: {
                                            // this can be saved to state if you want to say hello to the user by their name
                                                username: user.username, 
                                            }
                                        })
                            } else {
                                //password is not valid
                                res.status(400).json({ message: "Invalid Login Attempt - 2"})
                            }
                        })
                        .catch((err) => {
                            res.status(400).json({ message: "Invalid Login Attempt - 3"})
                        })
                }
            })
            .catch((err) => {  //specific to errors while looking for the document
                //in production do not sue specific login error messages, these should be generic 
                res.status(400).json({ message: "Invalid Login Attempt - 4"})
            })
    },
    
    logout: (req, res) => {
        console.log("Logging out!");
        res.clearCookie("usertoken");
        res.json({message : "You have successfully logged out of our system"})
    }
}