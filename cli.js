var inquirer = require("inquirer");
var clozedoc = require("./cloze");
var basicdoc = require("./basic");

console.log(basicdoc);

// function start(questions) {
  inquirer
  .prompt(
   [{
     name: "fullText",
     type: "input",
     message: "Enter the full question here.",
   },
   {
     name: "clozeAnswer",
     type: "input",
     message: "Enter the word or phrase to be clozed here.",
   }])

  .then(function(answers) {
    console.log(answers);

  var clozeCard = new clozedoc(answers.fullText, answers.clozeAnswer); 
  console.log(clozeCard);
  });

    // // Find the object that corresponds to the id the user entered
    // // Buy 'howMuch' of this item
    // var idUserEntered = (answers.whatBuy);
    // var stockUserWants =(answers.howMuch);
    // var matchingProduct = getProduct(products, idUserEntered);