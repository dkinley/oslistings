const Osl = require ('../models/osl.model')

module.exports = {

    getAll: (req, res) => {  // the getAll is the key, the value is the entire anonymous object
        Osl.find() //this is going to use the model connection to the db
                        // 'find' returns an array by default 
            .then((allOsl) => {
                console.log(allOsl);
                res.json(allOsl); // this is the return from the route
            })
            .catch((err) => {
                console.log("error happened in the getAll");
                console.log(err);
                res.status(400).json(err);
            });

    },    
    
    create: (req, res) => {  
        console.log(req.body); //whenever creating, it's good to console log
        Osl.create(req.body) // no {} as it is already an object, the req (request) is already an object
            .then((newOsl) => {  //this is new 
                console.log(newOsl);
                res.json(newOsl);
            })
            .catch((err) => {
                console.log("error happened in the Create");
                console.log(err);
                res.json(err);
            });
    },
    
    details: (req, res) => {  //need ID to bring one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Osl.findById(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((oneOsl) => {  //this is getting one
                console.log(oneOsl);
                res.json(oneOsl);
            })
            .catch((err) => {
                console.log("error happened in the details controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

    edit: (req, res) => {  //mongodb requires two pieces 1)query, i.e. what to find, 2) 
        console.log(req.params.id);
        console.log(req.body);

        Osl.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }) // no {} as it is already an object, the req (request) is already an object
            .then((updatedOsl) => {  //this is new 
                console.log(updatedOsl);
                res.json(updatedOsl);
            })
            .catch((err) => {
                console.log("error happened in the edit controller");
                console.log(err);
                res.status(400).json(err);
            });
    },

    delete: (req, res) => {  //need ID to delete one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Lit.findByIdAndDelete(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((deletedOsl) => {  //this is getting one
                console.log(deletedOsl);
                res.json(deletedOsl);
            })
            .catch((err) => {
                console.log("error happened in the delete controller");
                console.log(err);
                res.status(400).json(err);
            });
        },
}