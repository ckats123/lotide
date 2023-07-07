const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected + "✅✅✅");
    } else {
      console.log("🛑🛑🛑 Assertion Failed: " +actual + "!== " + expected + "🛑🛑🛑");
    }
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  
  // countOnly function: given an array and an object, 
  //it will return an object containing counts of everything that the input object listed.
  
  // allItems: an array of strings that we need to look through
  // itemsToCount: an object specifying what to count
  
  const countOnly = function(allItems, itemsToCount) {
    for (const item of allItems) {
      console.log(item);
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
        }w
        else {
          results[item] = 1;
      }
    }
  }
  return results;
}
  
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);