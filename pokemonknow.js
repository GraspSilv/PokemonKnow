var pokeApp = angular.module('pokeApp', []);

pokeApp.controller('GuessController', ['$scope', function($scope) {
    $scope.guess = "";
    $scope.pokes = [
        {
            name: "pikachu",
            id: 25
        },
        {
            name: "charmander",
            id:4
        }
    ];
    $scope.checkGuess = function(poke){
            //return angular.equals($scope.guess, poke.name);
        if(angular.equals($scope.guess, poke.name)){
            showImage(poke.id)
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