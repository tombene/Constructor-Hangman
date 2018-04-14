var Word = require("./word.js");
var inquirer = require("inquirer");

var words = ['splendor','smash up','seven wonders','awesome','ticket to ride', 'porto rico'];
var selectedWord = words[Math.floor(Math.random() * words.length)];
// var letterArr = [];

// console.log(letterArr);
var currentWord = new Word(selectedWord);

var count = 0;
var success = false;

var askQuestion = function() {
	// check if word is guessed
	if(currentWord.wordGuessed()){
		count = 10;
		success = true;
	}
  // if statement to ensure that our questions are only asked ten times
  if (count < 10) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "guess",
				message: "Guess A letter?",
				validate: function(value){
					if(value.match(/^[A-Za-z]+$/) && value.length === 1){
						return true;
					}
					console.log("Please make input a valid letter!")
					return false;
				}
      }
    ]).then(function(res) {
			// Make the guess with letterGuess method
			currentWord.letterGuess(res.guess.toString());
      // printInfo result of guess
			currentWord.displayWord();
			
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
		if(success){
			console.log("Congrats you guessed it");
		}else{
			console.log("All out of guesses.");
		}
    
  }
};

// call askquestion to run our code
askQuestion();

