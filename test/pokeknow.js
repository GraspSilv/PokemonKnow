app.factory("pokeknow", ["$http", function($http) {
  return $http.get("http://pokeapi.kevgriffin.com/api/v2/pokedex/kanto/")
    .success(function(data) {
      return data;
    })

    .error(function(err) {
      return err;
    });
}]);