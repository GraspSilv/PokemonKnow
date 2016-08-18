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

// Countdown Timer

var timeInMinutes = 2;
var currentTime = Date.parse(new Date());
var deadline = new Date(currentTime + timeInMinutes*60*1000);

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');
  function updateClock(){
      var t = getTimeRemaining(endtime);
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);