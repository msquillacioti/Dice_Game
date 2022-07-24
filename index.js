//// For Dice #1 ////
var randomNumber1 = (Math.floor(Math.random()*(6)) + 1);    // This returns a random number 1 to 6.

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";   //   images/dice1.png - images/dice6.png

// Finds location of the first image within the HTML code //
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage1);


//// For Dice #2 ////
var randomNumber2 = (Math.floor(Math.random()*(6)) + 1);    // This returns a random number 1 to 6.

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";   //   images/dice1.png - images/dice6.png

// Finds location of the second image within the HTML code.
// Unlike in the code for the first dice, this line also sets the attribute, instead of doing it on a new line. //
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


//// For changing the title based on dice roll results ////
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
