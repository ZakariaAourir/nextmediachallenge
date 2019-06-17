const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');



// require routes
const index = require("./routes/index");
// init app
const app = express();

// port
const port = 3000;



app.engine('handlebars', exphbs({defaultLayout: 'main'})); // means that all view layouts gonna have the same layout 'main'
app.set('view engine', 'handlebars');
app.use(session({
  secret : 'secret',
  resave : false,
  saveUninitialized : true
}));


app.use('/', index)

// calling the port

app.listen(port, () => {
  console.log('server is running on port '+port);
});
