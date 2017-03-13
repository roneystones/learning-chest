// Cria a app e injeta ngAnimate e ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router', 'ngMessages'])

// configura rotas 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // rota para o form (/form)
    .state('form', {
    url: '/form',
    templateUrl: 'partial/form.html',
    controller: 'formController'
  })

  // cada uma das sessões tem sua url (/form/<nome>)
  .state('form.signup', {
    url: '/signup',
    templateUrl: 'partial/form-signup.html'
  })

  .state('form.profile', {
    url: '/profile',
    templateUrl: 'partial/form-profile.html'
  })

  .state('form.endereco', {
    url: '/endereco',
    templateUrl: 'partial/form-endereco.html'
  });

  // url desconhecida = volta para /form
  $urlRouterProvider.otherwise('/form/signup');
})

// controller
// =============================================================================
.controller('formController', function($scope) {

  // armazena os dados do form
  $scope.formData = {};


  // function que processa o form
  $scope.processForm = function() {
    alert('OK!');
  };

});