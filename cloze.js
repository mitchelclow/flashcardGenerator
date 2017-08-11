function ClozeFlashcard(normalText, stringToReplace) {
	console.log("Inside the cloze function.")
  this.normalText = normalText;
  this.clozeText = stringToReplace;
  this.partialText = normalText.replace(stringToReplace, "...");
}

var firstPresidentCloze = new ClozeFlashcard (

	"Blue is the color of the sky." , "Blue"
	);

console.log(firstPresidentCloze);

module.exports =  ClozeFlashcard;