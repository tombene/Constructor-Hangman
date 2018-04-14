var Letter = function(letter){
	this.character = letter;
	this.guessed = false;
	this.toString = function(){
		if(this.guessed){
			return this.character;
		}
		if(this.character === ' '){
			this.guessed = true;
			return ' ';
		}else{
			return "_";
		}
		
	};
	this.checkGuess = function(myChar){
		//console.log(mychar,this.character);
		if(myChar === this.character){
			
			this.guessed = true;
		}
	};
	this.checkIfGuessed = function(){
		return this.guessed;
	}
}

module.exports = Letter;
//Testing code
// var firstWord = [new Letter('t'),new Letter('o'),new Letter('m')];
// var firstGuess = 'v';
// var secondGuess = 'o';

// for(let i = 0; i < firstWord.length; i++){
// 	console.log(firstWord[i] + '');
// }
// for(let i = 0; i < firstWord.length; i++){
// 	firstWord[i].checkGuess(firstGuess);
// }
// for(let i = 0; i < firstWord.length; i++){
// 	console.log(firstWord[i] + '');
// }
// for(let i = 0; i < firstWord.length; i++){
// 	firstWord[i].checkGuess(secondGuess);
// }
// for(let i = 0; i < firstWord.length; i++){
// 	console.log(firstWord[i] + '');
// }