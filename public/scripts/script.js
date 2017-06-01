console.log('script');
var statsApp = angular.module('statsApp', []);

statsApp.controller('mainController', ['$scope', '$http', function($scope, $http){
  console.log('angular');
}]);
