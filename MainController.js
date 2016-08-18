// MainController.js

app.controller('MainController', ['$scope', 'pokeknow', function($scope, pokeknow) {
  pokeknow.success(function(data) {
    $scope.species = data;
    console.log(data.pokemon_entries);
    $scope.quantity = 151;
  });

}]);