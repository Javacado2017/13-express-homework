//Dependencies
var friendsEntry = require('../data/friends.js');
//var path = require('path');

//Routing
module.exports = function(app) {
  //API GET Request 
  app.get('/api/friends', function(req, res) {
    res.json(friendsEntry);
  });

  //API POST Request
  app.post('/api/friends', function(req, res) {
    friendsEntry.push(req.body);
  });

};
