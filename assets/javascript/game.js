// Variables 
var yourScore = document.getElementById('yourScore');

// Displays the current score
yourScore.innerHTML = 0; 
var targetScore = document.getElementById('targetScore');
targetScore.innerHTML = getRandomValue(10, 4);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
} 

// the values of each gem and the console log -- retrieved by website in readme
var red = document.getElementById("red");
//red.setAttribute("value", "5");
console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

var yellow = document.getElementById("yellow");
//console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

// add an event listener to elements
red.addEventListener('click', function() {
  //this refers to red
  addToScore(this.value);
  checkPlayerScore();
});
    counter += gemValue;

    console.log(gemValue);
    console.log(counter);
    var playerInt = parseInt(yourScore.innerHTML);
    var targetInt = parseInt(targetScore.innerHTML);
    if (playerInt === targetInt) {
        alert('You win!');
    } else if (playerInt > targetInt) {
        alert('You lose!');
  } 

console.log(getRandomValue(10, 4));
