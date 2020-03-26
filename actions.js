var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 9;

var wins = 0;

var losses = 0;

// computer picks a letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)]
console.log(computerGuess);
//user has three guesses to guess corectly
var strikes = 10;

document.onkeyup = function(event) {
    var userGuess = event.key
    if (userGuess === computerGuess) {
        console.log("You win!")
        wins++;
        document.getElementById("wins").innerHTML = (wins)
        reset();
    }
    else if (strikes > 0) {
        strikes--;
        document.getElementById("guesses-left").innerHTML = (strikes)
        console.log("that wasn't it!");
    }
    else {
        console.log("you lose!")
        losses++;
        document.getElementById("losses").innerHTML = (losses)
        reset();
    }
    document.getElementById("guesses-so-far").innerHTML = (userGuess);
}

function reset() {
    strikes = 10;
    computerGuess = letters[Math.floor(Math.random()* letters.length)]
    console.log(computerGuess)
}

// user starts making guesses
// compare user guess vs. computer guess. if user is wrong count down guesses
//if user is right, you win!
