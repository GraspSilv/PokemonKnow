// MainController.js

app.controller('MainController', ['$scope', 'pokeknow', function($scope, pokeknow) {
  pokeknow.success(function(data) {
  	$scope.species = [];
  	console.log(data.pokemon_entries);

  	 for (var x = 0; x < data.pokemon_entries.length; x++){
  		$scope.species.push(new Pokemon(data.pokemon_entries[x]));
  	}
    $scope.quantity = 151;
  });

}]);