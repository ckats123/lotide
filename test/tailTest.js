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
