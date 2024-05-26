"user strict";
let words = ["peace", "money", "comfort", "food"];
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

let remainingLetters = word.length;
let guess;
let lives = word.length;

while (remainingLetters > 0 && lives > 0) {
    alert(answerArray.join(" "));
    guess = prompt("Guess a single letter or click 'cancle' to end the game." + lives + "left");
    lives--;
    if (guess === null) {
        alert("You quit the game. Please try next time again.");
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter");
    } else {
        guess = guess.toLowerCase();
        let correctGuesses = 0
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have guessed the letter");
                    break;
                }
            }
        }
    }
};
if (remainingLetters === 0) {
    alert("Congratulations!");
};
if (lives === 0) {
    alert("You ran out of lives!");
};
alert("The answer was "+word);