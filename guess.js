var guessApp = angular.module('guessApp', []);

guessApp.controller('GuessController', ['$scope', function($scope) {
    $scope.guess = "";
    $scope.pokes = [
        {
            name: "pikachu"
        },
        {
            name: "charmander"
        }
    ];
    $scope.checkGuess = function(pokeName){
            return angular.equals($scope.guess, pokeName);
    };
}]);
                 