const express = require ('express');
const app = express ();
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded( { extended : true} ) );
app.use(cors());

require('./config/mongoose.config');

require('./routes/osl.routes')(app);
// saying 'get me the function and run it at the same time', another way to write this is:
// const oslRoutes = require('./routes/osl.routes');
// oslRoutes(app);

app.listen(port, () => console.log("Listening on port:  " + port));