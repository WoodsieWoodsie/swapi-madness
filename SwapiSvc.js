'use strict';

var myapp = angular.module('myapp');

myapp.service('SwapiSvc', [ "$http", function($http){
  console.log("GOOD HEAVENS")
  this.planets = function(){
    $http.get("http://swapi.co/api/planets/?format=json")
    .then(resp => {
      var planets_data = resp.data.results.map(planet => {
        planet.residents = planet.residents.map(resident => {
          var resident = { url: resident };
          resident.id = resident.url.match(/\d+/)[0];
          return resident;
        });
        return planet;
      });
      console.log("ARRRGH");
      debugger;
      return planets_data;
    }).catch(error => console.error(error.status));
  }
}]);