// MainController.js

app.controller('MainController', ['$scope', 'pokeknow', function($scope, pokeknow) {
  pokemonknow.success(function(data) {
    $scope.species = data;
    console.log(data.pokemon_entries);
    $scope.quantity = 151;
  });

}]);