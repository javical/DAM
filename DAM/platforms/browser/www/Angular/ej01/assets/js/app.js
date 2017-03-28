//En angular la funcionalidad va separada en modulos: (En este caso solo hay uno)

var todoApp = angular.module('todoApp',[]);
//las variables las asigna en orden y $scope es una variable del modulo de angular y es la que hace la 'magia'
//todoApp.controller('TodoController', ['$scope', 'database', function($scope, db){}]);

todoApp.controller('TodoController', ['$scope', function($scope){
    var todos=[];

    todos.push({done: false, task: 'Aprender AngularJS'});
    todos.push({done: false, task: 'Aprender Ionic'});
    todos.push({done: true, task: 'Adorar JavaScript'});

    $scope.todos = todos;

    $scope.addTodo = function(){
        todos.push({ done: false, task: $scope.inputText });
        $scope.inputText = '';
    };

}]);


