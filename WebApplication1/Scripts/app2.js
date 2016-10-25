/// <reference path="angular.js" />
var app2 = angular.module("todo", []);

app2.factory("TodoService", function () {
    return {

    }
});

app2.controller("todoController", function ($scope, $http, TodoService) {

    console.log("todoController started..");

    $scope.task = { id: "", subject: "", details: "", completed: false };
    $scope.tasks = [];
    $scope.mode = "insert";

    $scope.saveTask = function () {
        console.log($scope.task);
        console.log($scope.mode);

        if ($scope.mode == "insert") {

            var t = { subject: $scope.task.subject, details: $scope.task.details, completed: $scope.task.completed };

            t.id = new Date().toISOString();

            $scope.tasks.push(t);

        }
        else if ($scope.mode == "edit") {
            $scope.mode = "insert";
        }

        $scope.task = { id: "", subject: "", details: "", completed: false };
    }
    $scope.removeTask = function (task) {
        for (var i in $scope.tasks) {
            var t = $scope.tasks[i];

            if (t.id == task.id) {
                $scope.tasks.splice(i, 1);
            }
        }
    }
    $scope.editTask = function (t) {
        $scope.mode = "edit"
        $scope.task = t;
    }
    $scope.changeTaskState = function () {
        console.log($scope.task.completed);
        $scope.task.completed = !$scope.task.completed;
    }
});