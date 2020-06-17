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


// Third quesition: ask user if I've travelled outside of the country
// Function to ask third question and convert answer to lower case
function thirdQuestion(){
  var myTravel = prompt('Have I travelled outside of the country?','yes or no');
  var lowerMyTravel = myTravel.toLowerCase();
  console.log(lowerMyTravel);
  return lowerMyTravel;
}

// Check input and respond to travel question
var thirdAnswer = thirdQuestion();
if (thirdAnswer === 'yes'){
  alert ('True! I have visted 11 countries.');
} else if (thirdAnswer === 'no'){
  alert ('False! I have visted 11 countries.');
} else {
  alert ('You must enter yes or no.');
  secondQuestion();
}


// Fourth quesition: ask user if I fly on a private jet
// Function to ask foruth question and convert answer to lower case
function fourthQuestion(){
  var myJet = prompt('Do I normally fly on a private jet?','yes or no');
  var lowerMyJet = myJet.toLowerCase();
  console.log(lowerMyJet);
  return lowerMyJet;
}

// Check input and respond to travel question
var fourthAnswer = fourthQuestion();
if (fourthAnswer === 'yes'){
  alert ('False! I don\'t personally know anyone that has a private jet.');
} else if (fourthAnswer === 'no'){
  alert ('True! I don\'t personally know anyone that has a private jet.');
} else {
  alert ('You must enter yes or no.');
  secondQuestion();
}


// Fifth quesition: ask user if I have any siblings
// Function to ask fifth question and convert answer to lower case
function fifthQuestion(){
  var mySister = prompt('Do I have any siblings?','yes or no');
  var lowerMySister = mySister.toLowerCase();
  console.log(lowerMySister);
  return lowerMySister;
}

// Check input and respond to travel question
var fifthAnswer = fifthQuestion();
if (fifthAnswer === 'yes'){
  alert ('True! I have an older sister. She lives in Australia.');
} else if (fifthAnswer === 'no'){
  alert ('False! I have an older sister. She lives in Australia.');
} else {
  alert ('You must enter yes or no.');
  secondQuestion();
}
