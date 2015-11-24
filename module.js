'use strict';

var myapp = angular.module('myapp', ["ui.router"])

myapp.controller("PlanetCtrl", ["$scope", "$http", "SwapiSvc", function($scope, $http, SwapiSvc) {
  console.log("HELLO");
  $scope.planets = [];
  $scope.planets = SwapiSvc.planets();
  debugger;
}]);

myapp.controller("ResidentCtrl", function($scope, $http, $stateParams) {
  $http.get("http://swapi.co/api/people/" + $stateParams.id + "/?format=json").then(resp => {
    $scope.character = resp.data;
  });
})


myapp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/planets")

  $stateProvider
  .state('planets', {
    url: "/planets",
    templateUrl: "planets.html",
    controller: "PlanetCtrl"
  })
  .state('resident', {
    url: "/resident/:id",
    templateUrl: "resident.html",
    controller: "ResidentCtrl"
  })
})