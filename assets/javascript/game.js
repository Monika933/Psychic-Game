// Generate Random number

var computerGuess=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0,1);
var userGuess;

var wins=0;
var losses=0;
var guessesLeft=0;

console.log(computerGuess);

function startGame(){

   userGuess=document.getElementById("user-guess").value;

   if(userGuess == computerGuess){
    alert ("You Won!!!!!!");
   } else if (userGuess !== computerGuess){
       alert("Guess Again");
   }

}