var y = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
console.log(y)
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessesSoFar = "";
var userLetter = [];
document.getElementById("user-submit").onclick = function () {
    var x = document.getElementById("user-guess").value;
    if (userLetter.length == 11) {
        confirm("You lost!!!!!!!!");
        return;
    }

    if (x === y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ");
        wins++;
        updateWins();
        updateGuessesLeft();
        updateGuesses();
        reset();
    }
    else if (x !== y) {
        alert("OOPS SORRY!! TRY Again");
        losses++;
        updateLosses();
        updateGuesses();
        updateGuessesLeft();
        reset();
    }
}
function updateLosses() {
    document.querySelector("#loses").innerHTML = "Losses: " + losses;
}
function updateWins() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
function updateGuessesLeft() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessLeft;
    guessLeft--;
}
function updateGuesses() {
    var guesses2 = document.getElementById("user-guess").value;
    console.log(guesses2)
    userLetter.push(guesses2);
    document.querySelector("#guessSoFar").innerHTML = "Guesses so far: " + userLetter.join(' ');
}
function reset() {
    document.getElementById('user-guess').value = null;
}
updateLosses();
updateWins();
updateGuessesLeft();
updateGuesses();
reset();