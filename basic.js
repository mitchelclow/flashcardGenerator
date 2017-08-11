function BasicFlashcard(front, back)
{
  this.front = front;
  this.back = back;

}

var firstCard = new BasicFlashcard("Who was the first President of the United States?" , "George Washington");

console.log(firstCard.front);
console.log(firstCard.back);

module.exports = BasicFlashcard;