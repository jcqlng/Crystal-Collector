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
    computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(computerGuess);

    crystal1 = parseInt(Math.floor(Math.random() *12) +1);
    crystal2 = parseInt(Math.floor(Math.random() *12) +1);
    crystal3 = parseInt(Math.floor(Math.random() *12) +1);
    crystal4 = parseInt(Math.floor(Math.random() *12) +1);
}

// Click functions per stone
$("#crystal1").on("click", function(){
    score = score + crystal1;
    $("#score").html(score);
    console.log("score1" + score);
    if (score == computerGuess) {
        checkIfWon();
    }else if (score > computerGuess){
        checkIfWon();
    }
});

$("#crystal2").on("click", function(){
    score = score + crystal2;
    $("#score").html(score);
    console.log("score2" + score);
    if (score == computerGuess) {
        checkIfWon();
    }else if (score > computerGuess){
        checkIfWon();
    }
});

$("#crystal3").on("click", function(){
    score = score + crystal3;
    $("#score").html(score);
    console.log("score3" + score);
    if (score == computerGuess) {
        checkIfWon();
    }else if (score > computerGuess){
        checkIfWon();
    }
});

$("#crystal4").on("click", function(){
    score = score + crystal4;
    $("#score").html(score);
    console.log("score4" + score);
    if (score == computerGuess) {
        checkIfWon();
    } else if (score > computerGuess){
        checkIfWon();
    }
});

// Win and losses functions
function checkIfWon() {
    if(score == computerGuess){
        winns++;
        console.log(wins);
        $("#winn").html("You win!");
        $("win").html("win:  " +wins);
        Reset();

    } else if (score > computerGuess){
        lost++;
        console.log(lost);
        $("#lost").html("Lost:  " + lost);
        Reset();
    }
}



