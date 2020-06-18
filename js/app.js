// 'use strict';

// // // Ask user 5 questions

// // First quesition: ask user if I'm from DSM
// var myLocation = prompt('Am I from Greater Des Moines?','yes or no');
// var lowerMyLocation = myLocation.toLowerCase();
// console.log(lowerMyLocation);
// if (lowerMyLocation === 'yes'){
//   alert ('True! I have lived in 5 states and spent most of my life in this area.');
// } else if (lowerMyLocation === 'no'){
//   alert ('False! I have lived in 5 states and spent most of my life in this area.');
// } else {
//   alert ('You must enter yes or no to know more about me.');
// }


// // Second quesition: ask user if I have a dog
// var myDog = prompt('Do I have a dog?','yes or no');
// var lowerMyDog = myDog.toLowerCase();
// console.log(lowerMyDog);
// if (lowerMyDog === 'yes'){
//   alert ('True! I have a Zuchon. Her Name is Allie.');
// } else if (lowerMyDog === 'no'){
//   alert ('False! I have a Zuchon. Her Name is Allie.');
// } else {
//   alert ('That\'s not the right input...');
// }


// // Third quesition: ask user if I've travelled outside of the country
// var myTravel = prompt('Have I travelled outside of the country?','yes or no');
// var lowerMyTravel = myTravel.toLowerCase();
// console.log(lowerMyTravel);
// if (lowerMyTravel === 'yes'){
//   alert ('True! I have visted 11 countries.');
// } else if (lowerMyTravel === 'no'){
//   alert ('False! I have visted 11 countries.');
// } else {
//   alert ('You won\'t know more about me if you unless you enter only yes or no');
// }


// // Fourth quesition: ask user if I fly on a private jet
// var myJet = prompt('Do I normally fly on a private jet?','yes or no');
// var lowerMyJet = myJet.toLowerCase();
// console.log(lowerMyJet);
// if (lowerMyJet === 'yes'){
//   alert ('False! I don\'t personally know anyone that has a private jet.');
// } else if (lowerMyJet === 'no'){
//   alert ('True! I don\'t personally know anyone that has a private jet.');
// } else {
//   alert ('You must enter yes or no.');
// }

// // Fifth quesition: ask user if I have any siblings
// var mySister = prompt('Do I have any siblings?','yes or no');
// var lowerMySister = mySister.toLowerCase();
// console.log(lowerMySister);
// if (lowerMySister === 'yes'){
//   alert ('True! I have an older sister. She lives in Australia.');
// } else if (lowerMySister === 'no'){
//   alert ('False! I have an older sister. She lives in Australia.');
// } else {
//   alert ('Invalid entery');
// }


// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// It should give the user exactly four opportunities to get the correct answer.
var chanceCount = 0;
var numGuess = prompt('Guess a number 1-10. You have 4 chances.');

while (chanceCount > 0);

// Indicates through an alert if the guess is “too high” or “too low”.
var guess = Number(numGuess);
if (guess < 6){
  alert ('Too low!');
} else if (guess > 6){
  alert ('Too high!');
} else if (guess === 6){
  alert ('You guessed correctly!');
  chanceCount = 0;
} else {
  alert ('You didn\'t guess a number...');
}

// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
chanceCount = chanceCount - 1;
console.log('guessCount is' + chanceCount);


