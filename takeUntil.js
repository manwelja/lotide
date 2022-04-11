// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  const result = [];

  //loop until the callback function returns true
  for (const element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;