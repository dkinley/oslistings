const UserController = require('../controllers/user.controller');
// the routes needs to pull in the controller

module.exports = (app) => { 
    //register user
    app.post('/api/users/register', UserController.register);
    //login user
    //logout user
}