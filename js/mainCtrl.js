// angular.module('myApp').controller('mainCtrl', function($scope){
//  $scope.test = ["pew", "pew", "pew", "pew"];
// });
var firstThing = require('../myModel/myModel.js')

module.exports = {

  Create: function(req, res, next){
    var newThing = new firstThing(req.body);
    newThing.save(function(err, response){
      if(err){
        res.status(500).json(err);
      }
      else {
        res.status(200).json(response);
      }
    })
  },

  Read: function(req, res, next){
firstThing.find().exec(function(err, response){
  if(err){
    res.status(500).json(err);
  }
  else {
    res.status(200).json(response);
  }
})
}




}
