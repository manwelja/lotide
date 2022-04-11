const findKeyByValue = function(objToScan, itemToFind) {

  for (const key in objToScan) {
    if (objToScan[key] === itemToFind) {
      return key;
    }
  }
  return undefined;

};
module.exports = findKeyByValue;