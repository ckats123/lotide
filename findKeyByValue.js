const assertEqual = require("./assertEqual");

// Instruction
//Implement the function findKeyByValue which takes in an object
//and a value. It should scan the object and return the first key
//which contains the given value. If no key with that given value is found,
//then it should return undefined.

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

//Use assertEqual to write test cases for various scenarios.

//Test Code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(
  findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
  undefined
);
