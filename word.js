var Letter = require("./letter.js");

var Word = function(selectedWord){
	this.word = createLetterArr(selectedWord);
	//this.word = [];
	this.displayWord = function(){
		let str = '';
		for(let i = 0; i < this.word.length; i++){
			str += this.word[i] + ' ';
		}
		console.log('result: ' + str);
	};
	this.letterGuess = function(guess){
		for(let i = 0; i < this.word.length; i++){
			this.word[i].checkGuess(guess);
		}
	}
}

function createLetterArr(selectedWord){
	let letterArr = [];
	for(let i = 0; i < selectedWord.length; i++){
		letterArr.push(new Letter(selectedWord.substring(i,i+1)));
	}
	return letterArr;
}

module.exports = Word;
//Testing
// var newWord = new Word([ new Letter('t'), new Letter('o'), new Letter('m')]);

// newWord.letterGuess('o');
// newWord.displayWord();