// Crystal variables
var crystal = {
  blue:
  {
    name: "blue",
    value: 0
  },

  green:
  {
    name: "green",
    value: 0
  },

  red:
  {
    name: "red",
    value:0
  },

  yellow:
  {
    name: "yellow",
    value: 0
  }

};

// Scores
var currentScore = 0;
var targetScore = 0; 

// Tabs
var winCount =0;
var lossCount = 0;

var getRandom = function(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Begins the game 
var startGame= function() {
  
  currentScore= 0;

  targetScore= getRandom(19, 120);

  // Values per crystals 1-12 
  crystal.blue.value    = getRandom(1,12);
  crystal.red.value     = getRandom(1,12);
  crystal.green.value   = getRandom(1,12);
  crystal.yellow.value  = getRandom(1,12);

  // HTML to reflect changes 
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);
  $("#lossCount").html(lossCount);
  $("#winCount").html(winCount);

  //console
  console.log("----------------------------------")
  console.log("Target Score: " +targetScore);
  console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
  console.log("----------------------------------")
}

const newLocal = "Your Score = ";
// Responsive click
var addValues = function(crystal) {
  currentScore = currentScore + crystal.value;
  $("#yourScore").html(currentScore);
  
  checkWin();

  console.log("your score" + currentScore);
}

var checkWin = function() {
  if(currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost!");
    lossCount++;
    $("#lossCount").html(lossCount);
    startGame();
  }

  else if (currentScore == targetScore) {
    alert("You won!");
    console.log("You Won!");
    winCount++;
    $("#winCount").html(winCount);
    startGame();
  }
}

// Main process
  $("#blue").click(function(){
    addValues(crystal.blue);
  });
  
  $("#red").click(function(){
    addValues(crystal.red);
  });
  
  $("#green").click(function(){
    addValues(crystal.green);
  });
  
  $("#yellow").click(function(){
    addValues(crystal.yellow);
  });
