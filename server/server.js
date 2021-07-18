require("dotenv").config(); //load up all key values into memory, can access through an object called process.env 
const express = require ('express');
const app = express ();
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded( { extended : true} ) );
app.use(cors());

require('./config/mongoose.config');

require('./routes/osl.routes')(app);
require('./routes/user.routes')(app);

// saying 'get me the function and run it at the same time', another way to write this is:
// const oslRoutes = require('./routes/osl.routes');
// oslRoutes(app);

app.listen(process.env.MY_PORT, () => {
    console.log("Listening on port:  " + process.env.MY_PORT)});