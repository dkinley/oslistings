const User = require('../models/user.model');
const bcrypt = require('bcrypt');

//alternate syntax for exporting controller functions
module.exports = {
    register: (req, res) => {
        //use the object passed in to create a user instance 
        const newUser = new User(req.body);
    }
}