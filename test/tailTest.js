const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(
      tail(["Yo Yo", "Lighthouse", "Labs"]).length,
      2
    );
  });

  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]).length, 2);
  });
  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(
      tail(["Hello", "Lighthouse", "Labs"])[0],
      "Lighthouse"
    );
  });
  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(
      tail(["Hello", "Lighthouse", "Labs"])[1],
      "Labs"
    );
  });
  it("returns 'Hi' for ['Hi']", () => {
    assert.strictEqual(tail(["Hi"])[0], "Hi");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(tail([]), undefined);
  });
});

/*
// Test Case of tail.js: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1 of tail.js: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2 of tail.js: ...
const result1 = tail(["Hi"]);
assertEqual(result1[0], "Hi"); //ensure empty array is returned
*/
