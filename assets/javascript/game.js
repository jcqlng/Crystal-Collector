// Global Variables 

// Crystal variables
var Crystal= {
  blue
  {
    name: "Blue",
    value: 0
  },

  green
  {
    name: "Green",
    value: 0,
  },

  red
  {
    name: "Red",
    value:0,
  },

  yellow
  {
    name: "Yellow",
    value:0,
  }

};

// Scores
var currentScore = 0;
var targetScore = 0; 

// Tabs
var winCount =0;
var lossCount = 0;

var startGame= function() {
  var currentScore= 0;

  targetScore= Math.floor(Math.random()*(120 - 19 + 1))+ 19;

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

