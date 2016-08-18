// MainController.js

app.controller('MainController', ['$scope', 'pokeknow', function($scope, pokeknow) {
  pokeknow.success(function(data) {
    $scope.pokemon = data;
  });

}]);