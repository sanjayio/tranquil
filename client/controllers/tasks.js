var tranquilApp = angular.module('tranquilApp');

tranquilApp.controller('TasksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
	console.log('Books controller called!');

	$scope.getTasks = function() {
		$http.get('/api/tasks').success(function(response) {
			$scope.tasks = response;
		});
	}

	$scope.getTask = function() {
		var id = $routeParams.id;
		$http.get('/api/tasks/'+id).success(function(response) {
			$scope.task = response;
		});
	}

	$scope.addTask = function() {
		console.log('inside add task');
		$http.post('/api/tasks/', $scope.task).success(function(response) {
			window.location.href='#/tasks';
		});
	}

	$scope.updateTask = function() {
		var id = $routeParams.id;

		$http.put('/api/tasks/' + id, $scope.task).success(function(response) {
			window.location.href='#/tasks';
		});
	}

	$scope.removeTask = function(id) {
		$http.delete('/api/tasks/' + id, $scope.task).success(function(response) {
			window.location.href='#/tasks';
		});
	}
}]);