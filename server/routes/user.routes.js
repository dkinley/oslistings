const UserController = require('../controllers/user.controller');
// the routes needs to pull in the controller

module.exports = (app) => { 
    //register user
    app.post('/api/users/register', UserController.register);
    //login user
    app.post('/api/users/login', UserController.login);
    //logout user
    app.post('/api/users/logout', UserController.logout);
}