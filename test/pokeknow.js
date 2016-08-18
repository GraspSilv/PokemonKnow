app.factory("pokeknow", ["$http", function($http) {
  return $http.get("http://pokeapi.co/api/v1/pokedex")
    .success(function(data) {
      return data;
    })

    .error(function(err) {
      return err;
    });
}]);