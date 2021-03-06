// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing
require('./app/routes/apiRoutes.js')(app); 
require('./app/routes/htmlRoutes.js')(app);

//Server to start listening
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
})