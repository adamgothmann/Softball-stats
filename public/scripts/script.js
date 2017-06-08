angular.module('statsApp', ['ngRoute'])
  .config(["$routeProvider", function($routeProvider){
    $routeProvider.
      when('/home', {
        templateUrl: "/views/home.html",
        controller: "mainController"
      }).
      otherwise({
        redirectTo: "/home"
      });
  }])
  .controller('mainController', ['$scope', '$http', function($scope, $http){
    console.log('something');
    $scope.addTeam = function(){
      console.log($scope.teamName);
      var teamToSend = {
        teamName: $scope.teamName
      };

      $http({
        method: 'POST',
        url: '/addTeam',
        data: teamToSend
      });
    };
  }]);
