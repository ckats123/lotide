const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined; // Return undefined if no key is found
};

const callback = function (object) {
  return object.stars;
};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

// Test Code
assertEqual(result, "noma"); // Test should pass
