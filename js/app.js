'use strict';

// Ask user if I'm from DSM
var myLocation = prompt('Am I from Greater Des Moines?','yes or no');

// Conert to lower case
var lowerMyLocation = myLocation.toLowerCase();
console.log(lowerMyLocation);

// Check input and respond
if (lowerMyLocation === 'yes'){
  alert ('Yes! I have lived in 5 states and spent most of my life in this area.');
} else if (lowerMyLocation === 'no'){
  alert ('False! I have lived in 5 states and spent most of my life in this area.');
} else {
  alert ('You must enter yes or no.');
}

