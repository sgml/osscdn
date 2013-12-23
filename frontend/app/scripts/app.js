'use strict';

angular.module('osscdnApp', ['ngAnimate', 'ngRoute', '$strap.directives']).
        config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});