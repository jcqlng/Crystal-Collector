// Variables 
$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    $(".wins-text").text("Wins:  " + wins);
    $(".losses-text").text("Losses: " + losses);

// Array of Images
var gemImages = ["assets/images/red-crystal.jpeg","assets/images/blue-crystal.jpeg", "assets/images/yellow-crystal.jpeg","assets/images/green-crystal.jpeg"];

// Assignment of random number to each gem 
function gemValues() {
    for (var i=0; i < gemImages.length; i++) {
        var image = $("<img>");
        image.addClass("gem-buttons gem gem-image");
        image.attr("src", gemImages[i]);
        image.attr("data-letter", Math.floor(Math.random() *12) +1);
        $("#gems").append(image);
    }
}

// When the gem is clicked
$(".gem-buttons").on("click", function () {
    // Assigns random number to clicks
    gemIsClicked = true;
    var gemValue = ($(this).attr ("data-letter"));
    gemValue = parseInt(gemValue);
    // Adds global variables to click 
    counter += gemValue;

    console.log(gemValue);
    console.log(counter);

    $(".your-guess").text("Your points: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
        wins++;
        $(".wins-text").text("Wins: " + wins);
        $("#gems").empty();
        gemValues();
        playGame();
    }

    else if (counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $(".losses-text").text("Losses: "+ losses);
        $("#gems").empty();
        gemValues();
        playGame();
    }

    else if(counter >= targetNumber) {
        alert("You lose!");
        losses++;
        $(".losses-text").text("Losses: " + losses);
        $("#gems").empty();
        gemValues();
        playGame();
    }
}
