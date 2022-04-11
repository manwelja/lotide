const flatten = function(nestedArray) {
  const flatArray = [];
  //iterate through each element of the array
  nestedArray.forEach((element) => {
    //check if the current element is an array, if so flatten it before appending it to the new array
    Array.isArray(element) ? element.forEach((subElement) => {
      flatArray.push(subElement);
    }) : flatArray.push(element);
  });
  
  return flatArray;
};

module.exports = flatten;
