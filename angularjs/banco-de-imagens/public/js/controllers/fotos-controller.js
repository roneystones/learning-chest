angular.module('imagebank').controller('FotosController', function($scope, $http) {

  $scope.fotos = [];

  $http.get('/v1/fotos')
    .success(function(retorno) {
      console.log(retorno);
      $scope.fotos = retorno
    })
    .error(function(retorno) {
      console.log(erro);
    });

});
