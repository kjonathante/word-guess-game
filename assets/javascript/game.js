var wordToGuess = "tommorow";
var blankWord = [];
var usedLetters = [];


for (i=0; i < wordToGuess.length; i++) {
  blankWord.push("*");
}

console.log( blankWord);

var guesses = "taoimeruw"

for (y=0; y < guesses.length; y++) {
  var inputLetter = guesses[y];
  var match = false;
  var gotIt=false;
  for (i=0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === inputLetter) {
      blankWord[i] = inputLetter;
      match=true;
    }
  }
  if (!match) {
    if (usedLetters.indexOf(inputLetter) == -1 ) {
      usedLetters.push(inputLetter); 
    }
  } 

  if (blankWord.indexOf('*') == -1) {
    gotIt = true;
  }
  console.log( y + " of " + guesses.length)
  console.log(wordToGuess); 
  console.log(blankWord.join());
  console.log(usedLetters.join());
  console.log(gotIt);
}