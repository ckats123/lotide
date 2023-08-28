// test/middleTest.js
const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("should return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [] for [1,2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

/*
// Test Case for middle.js
assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
*/
