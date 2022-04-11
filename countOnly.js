// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //create a new object with a list items as keys
  const results = {};
  for (let item of allItems) {
    //the ! will check for falsy values, not using it will check for truthy
    if (itemsToCount[item]) {
      //if the key exists in he count array, increment is, otherwise create a new key initialized with 1
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;