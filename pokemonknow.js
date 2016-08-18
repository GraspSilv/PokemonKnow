var pokeApp = angular.module('pokeApp', []);

pokeApp.controller('GuessController', ['$scope', function($scope) {
    $scope.guess = "";
}]);

$(document).ready(function(){
   for(var i = 0; i < 151; i++)
     $("#boxes").append("<img src=\"transparent.png\" class=\"pimg\" width=\"50\" height=\"50\" />");  
});


function showImage(pokeNum) {
    var str = ":nth-child(" + pokeNum + ")";
    $("#boxes > " + str).attr('src', "sprites/" + pokeNum + ".png");
}