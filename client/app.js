var tranquilApp = angular.module('tranquilApp', ['ngRoute']);
tranquilApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'TasksController',
		templateUrl: 'views/tasks.html'
	})
	.when('/tasks', {
		controller: 'TasksController',
		templateUrl: 'views/tasks.html'
	})
	.when('/tasks/details/:id', {
		controller: 'TasksController',
		templateUrl: 'views/task_details.html'
	})
	.when('/tasks/add', {
		controller: 'TasksController',
		templateUrl: 'views/new_task.html'
	})
	.when('/tasks/edit/:id', {
		controller: 'TasksController',
		templateUrl: 'views/edit_task.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});