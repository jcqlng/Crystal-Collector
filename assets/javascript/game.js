// Global Variables 

// Crystal variables
var Crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },

  green:
  {
    name: "Green",
    value: 0
  },

  red:
  {
    name: "Red",
    value:0
  },

  yellow:
  {
    name: "Yellow",
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
  return Math.floor(Math.random()* (max - min + 1)) + min;
};
// Begins the game 
var startGame= function() {
  
  var currentScore= 0;

  targetScore= getRandom(19,120);
  // Values per crystals 1-12 
  crystal.blue.value = getRandom(1,12);
  crystal.red.value = getRandom(1,12);
  crystal.green.value = getRandom(1,12);
  crystal.yellow.value = getRandom(1,12);

  //console
  console.log("----------------------------------")
  console.log("Target Score: " +targetScore);
  console.log("Blue: " + crystal.blue.value + " | Red: " + crystal.red.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
  console.log("----------------------------------")
}

// Clicks for crystal
$("#blue").click(function(){
  alert("test");
});

$("#red").click(function(){
  alert("test");
});

$("#green").click(function(){
  alert("test");
});

$("#yellow").click(function(){
  alert("test");
});

