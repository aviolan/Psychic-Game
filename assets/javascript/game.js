var alphabet = 
    ['a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Variables for tracking wins, losses, guesses remaining and guessed letters.
var wins = 1;
var losses = 1;
var guessesRemaining = 10;
var guessedLetters = [];

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)

    //When user presses a key
document.onkeydown = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        document.getElementById("wins").innerHTML = wins++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
        guessedLetters.push(userGuess);
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }

    if (guessesRemaining <= 0) {
        document.getElementById("losses").innerHTML = losses++;
        guessesRemaining = 10;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        document.getElementById("guessesRemaining").innerHTML = 10;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}