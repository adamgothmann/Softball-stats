angular.module('statsApp', ['ngRoute'])
  .config(["$routeProvider", function($routeProvider){
    $routeProfider.
      when("/home", {
        templateUrl: "views/home.html",
        controller: "mainController"
      }).
      otherwise({
        redirectTo: "/home"
      });
  }])

  .controller('mainController', function($scope, $http) {
    console.log('controller');
  });
