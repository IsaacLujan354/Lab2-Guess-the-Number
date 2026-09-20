let answer = Math.floor(Math.random() * 99) + 1; // Gives a random number between 1-99
let guesses = "";
let triesLeft = 7;
let gamesWon = 0;
let gamesLost = 0;

const winMessage = "Congratulations. You guessed it.";

let gamesWonMessage = document.querySelector("#gamesWon");

let gamesLostMessage = document.querySelector("#gamesLost");

let guessMessage = document.querySelector("#guessMessage");

let triesLeftMessage = document.querySelector("#triesLeft");

let userGuessesMessage = document.querySelector("#guesses");

let guessButton = document.querySelector("#guessButton");

guessButton.addEventListener("click", function () {

    if(triesLeft <= 0){
        guesses = "";
        triesLeft = 7;
        answer = Math.floor(Math.random() * 99) + 1;
        guessButton.textContent = "Guess!";
        guessMessage.textContent = "Please guess a number between 1-99.";
        guessMessage.style.color = "white";
        triesLeftMessage.textContent = "You have 7 tries.";
        userGuessesMessage.textContent = "";
    }
    else if(guessInput.value == answer){
        guesses += guessInput.value + ", ";
        guessMessage.textContent = "You got it!";
        guessMessage.style.color = "lightgreen";
        triesLeftMessage.textContent = "Total Tries: " + (7 - triesLeft + 1);;
        userGuessesMessage.textContent = "Guesses: " + guesses;
        gamesWon += 1;
        gamesWonMessage.textContent = "Games Won: " + gamesWon;
        triesLeft = 0; // So that the next click resets the game
        guessButton.textContent = "Reset";
    }
    else if(triesLeft == 1){ // == 1 instead of == 0 because 0 gives 8 tries instead of 7
        guesses += guessInput.value + ", ";
        triesLeft -= 1;
        guessMessage.textContent = "Out of tries. You Lose. The answer was: " + answer;
        guessMessage.style.color = "red";
        triesLeftMessage.textContent = "Tries Left: " + triesLeft;
        userGuessesMessage.textContent = "Guesses: " + guesses;
        gamesLost += 1;
        gamesLostMessage.textContent = "Games Lost: " + gamesLost;
        guessButton.textContent = "Reset";
    }
    else if(guessInput.value < 1 || guessInput.value > 99){
        guessMessage.textContent = "Out of bounds. Guess a number between 1-99."
        guessMessage.style.color = "red";
    }
    else if(guessInput.value < answer){
        guesses += guessInput.value + ", ";
        triesLeft -= 1;
        guessMessage.textContent = "Guess Too Low. Try Again.";
        guessMessage.style.color = "red";
        triesLeftMessage.textContent = "Tries Left: " + triesLeft;
        userGuessesMessage.textContent = "Guesses: " + guesses;
    }
    else if(guessInput.value > answer){
        guesses += guessInput.value + ", ";
        triesLeft -= 1;
        guessMessage.textContent = "Guess Too High. Try Again.";
        guessMessage.style.color = "red";
        triesLeftMessage.textContent = "Tries Left: " + triesLeft;
        userGuessesMessage.textContent = "Guesses: " + guesses;
    }
});