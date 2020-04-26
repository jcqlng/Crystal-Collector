// Variables 
$(document).ready(function(){
    var wins = 0;
    var lost = 0;
    var score = 0;

// variable/ math to do a random number generator
    var computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(computerGuess);

// variables for the stones
   var crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
   var crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
   var crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
   var crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);
   
// Console log testing the random numbers
    console.log("computerGuess" + computerGuess);
    console.log("crystal1" + crystal1);
    console.log("crystal2" + crystal2);
    console.log("crystal3" + crystal3);
    console.log("crystal4" + crystal4);
})

// Reset function 
function Reset () {
    score = 0;
    $("#score").html(score);
}