'use strict';

// Ask user 5 questions

// First quesition: ask user if I'm from DSM
// Function to ask first question and convert answer to lower case
function firstQuestion(){
  var myLocation = prompt('Am I from Greater Des Moines?','yes or no');
  var lowerMyLocation = myLocation.toLowerCase();
  console.log(lowerMyLocation);
  return lowerMyLocation;
}


// Check input and respond to location question
var firstAnswer = firstQuestion();
if (firstAnswer === 'yes'){
  alert ('True! I have lived in 5 states and spent most of my life in this area.');
} else if (firstAnswer === 'no'){
  alert ('False! I have lived in 5 states and spent most of my life in this area.');
} else {
  alert ('You must enter yes or no.');
  firstQuestion();
}


// Second quesition: ask user if I have a dog
// Function to ask second question and convert answer to lower case
function secondQuestion(){
  var myDog = prompt('Do I have a dog?','yes or no');
  var lowerMyDog = myDog.toLowerCase();
  console.log(lowerMyDog);
  return lowerMyDog;
}


// Check input and respond to dog question
var secondAnswer = secondQuestion();
if (secondAnswer === 'yes'){
  alert ('True! I have a Zuchon. Her Name is Allie.');
} else if (secondAnswer === 'no'){
  alert ('False! I have a Zuchon. Her Name is Allie.');
} else {
  alert ('You must enter yes or no.');
  secondQuestion();
}
