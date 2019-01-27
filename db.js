var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/test', {useNewUrlParser: true});
	
var userSchema = new mongoose.Schema({
    nome: String,
    email: String
}, { collection: 'usercollection' }
);
 
module.exports = { Mongoose: mongoose, UserSchema: userSchema };