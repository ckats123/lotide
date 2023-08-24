const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

/*
Implement the definition for function eqObjects which will take in two
objects and returns true or false, based on a perfect match.
*/

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  // console.log("object1:", object1);
  // console.log("object2:", object2);
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object1[key] === object2[key]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

module.exports = eqObjects;

// TEST CODE
assertEqual(eqObjects({ x: "a", y: "2" }, { y: "2", x: "a" }), true); // => true
assertEqual(
  eqObjects({ x: "a", y: "2" }, { x: "a", y: "2", z: "3" }),
  false
); // => false

// Primitives As Values (Tests)
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

// Arrays As Values (Tests)
const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium",
};
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
