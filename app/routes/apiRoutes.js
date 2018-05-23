//Dependencies
var friendEntries = require('../data/friends.js');
//var path = require('path');

//Routing
module.exports = function(app) {
  //API GET Request 
  app.get('/api/friends', function(req, res) {
    res.json(friendEntries);
  });

  //API POST Request
  app.post('/api/friends', function(req, res) {
    friendEntries.push(req.body);
  });

};
