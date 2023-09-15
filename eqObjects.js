const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  let result = false;
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return result;
  } else {
    for (let key of array1) {
      if (
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key])
      ) {
        result = eqArrays(object1[key], object2[key]);
      } else if (object1[key] === object2[key]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};

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

module.exports = eqObjects;
