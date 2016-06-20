var mongoose = require('mongoose');

//user schema
var taskSchema = mongoose.Schema({
	tasksummary: {
		type: String,
		required: true
	},
	taskdesc: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	}
});

var task = module.exports = mongoose.model('task', taskSchema);

//Get tasks
module.exports.getTasks = function(callback, limit) {
	task.find(callback).limit(limit);
};

//Get task
module.exports.getTaskById = function(id, callback) {
	task.findById(id, callback);
};

//Add task
module.exports.addTask = function(newtask, callback) {
	task.create(newtask, callback);
};

//Update task
module.exports.updateTask = function(id, updatedTask, options, callback) {
	var query = {_id: id};
	var update = {
		tasksummary: updatedTask.tasksummary,
		taskdesc: updatedTask.taskdesc,
		status: updatedTask.status
	};
	task.findOneAndUpdate(query, update, options, callback);
};

//Delete task
module.exports.deleteTask = function(id, callback) {
	var query = {_id: id};
	task.remove(query, callback);
};
