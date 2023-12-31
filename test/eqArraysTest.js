// test/eqArrays.js
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const { assert } = require("chai");

describe("#eqArrays", () => {
  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for [1, 2, 3] and [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true for ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.strictEqual(
      eqArrays(["1", "2", "3"], ["1", "2", "3"]),
      true
    );
  });
  it("should return false for ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.strictEqual(
      eqArrays(["1", "2", "3"], ["1", "2", 3]),
      false
    );
  });
});

// Test Case for eqArrays.js
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// Test Case for eqArrays.js
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
