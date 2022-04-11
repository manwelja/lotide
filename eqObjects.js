const eqArrays = require('./eqArrays');

//console.log("arrays", eqArrays)
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = true;

  //Make sure the objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  }
  //if the objects have the same number of keys but tke key values/names are not identical, return false
  for (let key in object1) {
    //if the current key contains an array, use a helper function to compare arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        result = false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        result = false;
      }
    }
  }
  return result;
};
module.exports = eqObjects;