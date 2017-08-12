/*

Generate a random letter between a and z.
Record the turn number the player is on. Start it on 1.
Provide the player with a way to guess what the letter is.
Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
Next, check whether it is the correct letterr.
If it is correct:
Display congratulations message.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
If it is wrong and the player has turns left:
Tell the player they are wrong.
Allow them to enter another guess.
Increment the turn number by 1.
If it is wrong and the player has no turns left:
Tell the player it is game over.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1. 

*/

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];

	var randomLetter = letters[Math.floor(Math.random() * letters.length)];

	console.log(randomLetter);


document.onkeyup =function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		guessedLetters.push(userGuess);

		console.log(userGuess);

		if (userGuess === randomLetter) {
			wins++;
			alert("WHAT?!?! YOU WON?! IMPOSSIBLE!!!!");
			resetGame();
		}

		else {
			guesses--;
		}

		if (guesses === 0) {
			 losses++;
			 alert("Awww...You lose...HaHaHaHaHaHaHaHaHa!");
			 resetGame();
		}


var html = "<p>Wins: " + wins + "<p>" +
		"<p>Losses: " + losses + "<p>" +
		"<p>Guesses Left: " + guesses + "<p>" +
		"<p>Your Guesses so far: " + guessedLetters.join(', ') + "<p>";

	document.querySelector("#game").innerHTML = html;

	


}

function resetGame() {
	guesses = 9;
	guessedLetters = [];
	randomLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log("Letter to guess: " + randomLetter);

}



