var mongoose = require('mongoose');

//user schema
var userSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}, 
	password: {
		type: String,
		required: true
	}
});

var user = module.exports = mongoose.model('user', userSchema);

//Get users
module.exports.getUsers = function(callback, limit) {
	user.find(callback).limit(limit);
};

//Get user
module.exports.getUserById = function(id, callback) {
	user.findById(id, callback);
};

//Add user
module.exports.addUser = function(newuser, callback) {
	user.create(newuser, callback);
};

//Update user
module.exports.updateUser = function(id, updatedUser, options, callback) {
	var query = {_id: id};
	var update = {
		firstname: updatedUser.firstname,
		lastname: updatedUser.lastname,
		email: updatedUser.email,
		password: updatedUser.password
	}
	user.findOneAndUpdate(query, update, options, callback);
};

//Delete user
module.exports.deleteUser = function(id, callback) {
	var query = {_id: id};
	user.remove(query, callback);
};

