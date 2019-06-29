const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
/*const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
*/
//init app
const app = express();
//init port
const port = 3000;
// require routes
const index = require("./routes/index")

// body parser
app.use(bodyParser.json());
app.use(cors());

// Init passport
/*app.use(passport.initialize());
app.use(passport.session());
*/
app.use('/', index);


app.listen(port, () => {
  console.log('server is running on port '+port);
});
