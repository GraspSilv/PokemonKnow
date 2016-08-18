var pokeApp = angular.module('pokeApp', []);

pokeApp.controller('GuessController', ['$scope', function($scope) {
    $scope.guess = "";
}]);

/*
$(document).ready(function(){
   for(var i = 0; i < 151; i++)
     $("#boxes").append("<img src=\"transparent.png\" class=\"pimg\" width=\"30\" height=\"30\" />");  
});
*/

/*
images = {
    img1: "http://vignette3.wikia.nocookie.net/pokemon/images/c/c6/027Sandshrew_AG_anime.png/revision/latest?cb=20140906222809",
    img2: "http://cdn.bulbagarden.net/upload/thumb/3/3d/058Growlithe.png/250px-058Growlithe.png",
    img3: "http://www.freeiconspng.com/uploads/pokemon-png-24.png"
};
*/

var element, filling = "";
for (element in images) {
    filling += "<img src=\"{0}\" class=\"pimg\" width=\"50\" height=\"50\" />"
        .replace("{0}", images[element]);
}

document.getElementById("boxes").innerHTML = filling;
