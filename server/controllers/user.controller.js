const User = require('../models/user.model');
const bcrypt = require('bcrypt');

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
    }
}