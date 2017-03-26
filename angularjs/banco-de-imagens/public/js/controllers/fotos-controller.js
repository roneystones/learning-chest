angular.module('imagebank').controller('FotosController', function($scope, $http) {

  $scope.fotos = [];
  $scope.filtro = '';

  $http.get('/v1/fotos')
    .success(function(retorno) {
      $scope.fotos = retorno;
    })
    .error(function(erro) {
      console.log(erro)
    });

});
