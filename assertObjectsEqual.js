const assertEqual = require("./assertEqual");
const eqObjects = require("./eqObjects");

/* Instruction
Implement assertObjectsEqual which will take in two objects and console.log 
an appropriate message to the console.
*/

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
};
