// Dependencies
var path = require('path');

//Routing
module.exports = function(app) {
  //HTML GET Request for home page
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  //HTML GET Request for survey page
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  //HTML GET Request for home page as default
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
