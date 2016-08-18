window.onload = function(){
    setContainerWidth();
};

$(window).resize(function(){
   setContainerWidth();
});

function setContainerWidth()
{
    $('#boxes').css('width', 'auto'); //reset
    var windowWidth = $(document).width();
    var blockWidth = $('.pimg').outerWidth(true);
    var maxBoxPerRow = Math.floor(windowWidth / blockWidth);
    $('#boxes').width(maxBoxPerRow * blockWidth);
}

var pokeApp = angular.module('pokeApp', []);

pokeApp.controller('GuessController', ['$scope', 'pokeknow', function($scope, pokeknow) {
    
    pokeknow.success(function(data) {
        $scope.guess = "";
        $scope.pokes = [];
        for (var x = 0; x < data.pokemon_entries.length; x++){
            $scope.pokes.push(new Pokemon(data.pokemon_entries[x]));
        }
        //nidoran f/m edge case
        $scope.pokes[29].poke_name="nidoran";
        $scope.quantity = 151;
    });

    $scope.checkGuess = function(poke){
        if(angular.equals($scope.guess, poke.poke_name)){
            
            //nidoran f/m edge case
            if(poke.poke_name === "nidoran"){
                showImage(29);
                showImage(32);
            }else{
                showImage(poke.id_no);
            }
            if(!poke.visible){
                $scope.guess="";
            }
            
            poke.visible = true;
           }
    }}]);

$(document).ready(function(){
   for(var i = 0; i < 151; i++)
     $("#boxes").append("<img src=\"transparent.png\" class=\"pimg\" width=\"50\" height=\"50\" />");  
});

var numGuessed = 0;
function showImage(pokeNum) {
    var str = ":nth-child(" + pokeNum + ")";
    if ($("#boxes > " + str).attr('src') == "transparent.png") {
        numGuessed++;
        $("#boxes > " + str).attr('src', "sprites/" + pokeNum + ".png");
    }
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
        alert("Time's up! Your score: " + numGuessed);
        document.getElementById('textbox').readOnly = true;
      }
    }

    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('clockdiv', deadline);