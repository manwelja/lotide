const middle = function(inputArray) {
  let numToSlice = 0;
  let startIndex = 0;

  //ensure that the input parameter is a non-empty array
  if (!Array.isArray(inputArray) || inputArray.length < 3) {
    return [];
  }
  
  //if even num elements, need to pull an extra element out of the array
  inputArray.length % 2 === 0 ? numToSlice = 2 : numToSlice = 1;
  startIndex = Math.ceil(inputArray.length / 2) - 1;
  
  //return the middle element(s) of the input array
  return inputArray.slice(startIndex, startIndex + numToSlice);
};

module.exports = middle;