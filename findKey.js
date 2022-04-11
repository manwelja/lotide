//Function that uses a call back to iterate through object and return the first key that 
//gets a truthy result from the callback
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKey;