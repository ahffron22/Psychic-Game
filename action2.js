var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 10;

var wins = 0;

var losses = 0;


var computerGuess = letters[Math.floor(Math.random * letters.length)];

var strikes = 10;

document.onkeyup = function(event) {
    var userGuess = event.key
    if (userGuess = computerGuess) {
        wins++;
        document.getElementById("wins").innerHTML = (wins)
        reset();
    }
    else if (strikes > 0) {
        strikes--;
        document.getElementById("guesses-so-far").innerHTML = (strikes)
    }
    else {
        losses--;
        document.getElementById("losses").innerHTML = (losses)
        reset();
    }
    document.getElementById("guesses-so-far").innerHTML = (userGuess)
}

function reset() {
    strikes = 10;
    computerGuess = letters[Math.floor(Math.random()* letters.length)]
}