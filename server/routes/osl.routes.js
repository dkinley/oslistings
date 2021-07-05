const OslController = require('../controllers/osl.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/osl', OslController.getAll);  //get takes two parameters, first is the url
    app.post('/api/osl', OslController.create);
    app.get('/api/osl/:id', OslController.details); //creates a param id called id, this can be used in the controller
    app.put('/api/osl/:id', OslController.edit);
    app.delete('/api/osl/:id', OslController.delete);
} 