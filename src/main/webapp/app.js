'use strict'

var marvelApp = angular.module('marvelApp', ['ngResource', 'ngRoute', 'marvelApp.controllers', 'marvelApp.services']);

marvelApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/characters',    { templateUrl: '/view/characters.html', controller: 'CharactersListCtrl' });
  $routeProvider.when('/character/:id', { templateUrl: '/view/character.html',  controller: 'CharacterCtrl' });  
}]);

marvelApp.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true);
}]);


var marvelAppControllers = angular.module('marvelApp.controllers', []);
var marvelAppServices = angular.module('marvelApp.services', ['ngResource']);