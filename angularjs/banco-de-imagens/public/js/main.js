angular.module('imagebank', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    });

    $routeProvider.otherwise({
      redirectTo: '/fotos'
    });

    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/fotos'
    });

  });
