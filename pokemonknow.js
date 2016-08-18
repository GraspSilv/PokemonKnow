var pokeApp = angular.module('pokeApp', []);

pokeApp.controller('GuessController', ['$scope', 'pokeknow', function($scope, pokeknow) {
    
    pokeknow.success(function(data) {
        $scope.guess = "";
        $scope.pokes = [];
        for (var x = 0; x < data.pokemon_entries.length; x++){
            $scope.pokes.push(new Pokemon(data.pokemon_entries[x]));
        }
        $scope.quantity = 151;
    });

    $scope.checkGuess = function(poke){
            //return angular.equals($scope.guess, poke.name);
        if(angular.equals($scope.guess, poke.poke_name)){
            showImage(poke.id_no)
           }
    }}]);

$(document).ready(function(){
   for(var i = 0; i < 151; i++)
     $("#boxes").append("<img src=\"transparent.png\" class=\"pimg\" width=\"50\" height=\"50\" />");  
});


function showImage(pokeNum) {
    var str = ":nth-child(" + pokeNum + ")";
    $("#boxes > " + str).attr('src', "sprites/" + pokeNum + ".png");
}