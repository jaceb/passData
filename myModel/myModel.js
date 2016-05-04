var mongoose = require('mongoose');

var mySchema = new mongoose.Schema({
  firstThing: String
});

module.exports = mongoose.model('firstThing', mySchema);
