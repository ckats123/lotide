const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
    }
  };
  
  const eqArrays = function(array1, array2) {
    let result = true;
    if (array1.length !== array2.length) {
      result = false;
    } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          result = false;
        }
      }
    }
    return result;
  };
  
  const assertArraysEqual = function(array1, array2) {
    if (eqArrays(array1, array2)) {
      console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}] ✅✅✅`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${array1}] !== [${array2}] 🛑🛑🛑`);
    }
  };
  
  const words = ["ground", "control", "to", "major", "tom"];
  
  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  };
  
  const results1 = map(words, word => word[0]);
  console.log(results1);
  
