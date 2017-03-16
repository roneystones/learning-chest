angular.module("listaDeContatos").controller("listaDeContatosCtrl", function($scope) {
  $scope.app = "Lista de Contatos";
  $scope.contatos = [
    {nome : "Pedro", telefone : "99998888", data: new Date(), cor : "blue"},
    {nome : "Ana", telefone : "99997777", data: new Date(), cor : "yellow"},
    {nome : "João", telefone : "99996666", data: new Date(), cor : "green"},
    {nome : "Maria", telefone : "99995555", data: new Date(), cor : "red"}
  ];

  $scope.operadoras = [
    {nome : "Oi", codigo : 14, categoria : "Celular"},
    {nome : "Vivo", codigo : 15, categoria : "Celular"},
    {nome : "Tim", codigo : 41, categoria : "Celular"},
    {nome : "GVT", codigo : 25, categoria : "Fixo"},
    {nome : "Embratel", codigo : 21, categoria : "Fixo"}
  ];

  $scope.adicionarContato = function(contato) {
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
  };

  $scope.apagarContatos = function(contatos) {
    $scope.contatos = contatos.filter(function(contato) {
      if (!contato.selecionado) return contato;
    });
  };

  $scope.isContatoSelecionado = function(contatos) {
    return contatos.some(function(contato) {
      return contato.selecionado;
    });
  };

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
});
