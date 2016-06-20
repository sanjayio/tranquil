var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

User = require('./models/user');
Task = require('./models/task');

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/tranquil');
var db = mongoose.connection;

app.get('/', function(req, res) {
	res.send('Please use /api');
});

app.get('/api/users', function(req, res) {
	User.getUsers(function(err, users) {
		if(err) console.log(err);
		res.json(users);
	});
});

app.get('/api/users/:_id', function(req, res) {
	User.getUserById(req.params._id, function(err, user) {
		if(err) console.log(err);
		res.json(user);
	});
});

app.post('/api/users', function(req, res) {
	var user = req.body;
	User.addUser(user, function(err, user) {
		if(err) console.log(err);
		res.json(user);
	});
});

app.put('/api/users/:_id', function(req, res) {
	var id = req.params._id;
	var user = req.body;
	User.updateUser(id, user, {}, function(err, user) {
		if(err) console.log(err);
		res.json(user);
	});
});

app.delete('/api/users/:_id', function(req, res) {
	var id = req.params._id;
	User.deleteUser(id, function(err, user) {
		if(err) console.log(err);
		res.json(user);
	});
});

app.get('/api/tasks', function(req, res) {
	Task.getTasks(function(err, tasks) {
		if(err) console.log(err);
		res.json(tasks);
	});
});

app.get('/api/tasks/:_id', function(req, res) {
	Task.getTaskById(req.params._id, function(err, task) {
		if(err) console.log(err);
		res.json(task);
	});
});

app.post('/api/tasks', function(req, res) {
	var task = req.body;
	Task.addTask(task, function(err, task) {
		if(err) console.log(err);
		res.json(task);
	});
});

app.put('/api/tasks/:_id', function(req, res) {
	var id = req.params._id;
	var task = req.body;
	Task.updateTask(id, task, {}, function(err, task) {
		if(err) console.log(err);
		res.json(task);
	});
});

app.delete('/api/tasks/:_id', function(req, res) {
	var id = req.params._id;
	Task.deleteTask(id, function(err, task) {
		if(err) console.log(err);
		res.json(task);
	});
});

app.listen(3000);
console.log('Running on port 3000');