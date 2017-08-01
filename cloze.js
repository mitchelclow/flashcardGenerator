// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); ""

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): ""

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");


function ClozeFlashcard(normalText, stringToReplace)
{
  this.normalText = normalText;
  this.clozeText = normalText.replace(stringToReplace, "...");
}

var firstPresidentCloze = new ClozeFlashcard (

	"Blue is the color of the sky." , "Blue"
	);

console.log(firstPresidentCloze);



