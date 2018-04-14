var Word = require("./word.js");

var words = ['splendor','smash up','seven wonders','awesome','ticket to ride', 'porto rico'];
var selectedWord = words[Math.floor(Math.random() * words.length)];
// var letterArr = [];

// console.log(letterArr);
var currentWord = new Word(selectedWord);

currentWord.letterGuess('o');
currentWord.displayWord();



