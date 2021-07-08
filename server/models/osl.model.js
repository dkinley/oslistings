const mongoose = require('mongoose');

const OslSchema = new mongoose.Schema({
    street: {
        type: String,  //this is the validation for a name for the db
        required: [ true, "You must input a valid street address"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The address must be at least 4 characters long"],
    },
    city: {
        type: String, 
        required: [ true, "You must input a City"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The City has to be at least three characters"],
    },
    state: {
        type: String, 
        required: [ true, "You must input a valid two digit state code"],  //true - this is a required field, the 2nd part is the requirement
        enum: [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ],
        minlength: [2, "State code must be two digits"],
    },
    zipcode: {
        type: Number,
        required: [ true, "You must input a valid five digit zipcode"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [5, "Zipcode must be five digits"],
    },
    price: {
        type: Number,
        required: [ true, "You must input a number, input zero if not known"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [1, "You must input a number, input zero if not known"],
    },
    description: {
        type: String,
        required: [ false, ],
    },
},
    { timestamps: true }); // need it! this is the options of the Schema, required
    module.exports = mongoose.model("Osl", OslSchema);