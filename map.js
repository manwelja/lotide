/*******************************************/
//function that uses a callback to replicate the JS map function
const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
