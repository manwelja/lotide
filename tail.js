const tail = function(arr1) {

  if (arr1.length < 2) {
    return [];
  } else {
    return arr1.slice(1,arr1.length);
  }
};

module.exports = tail;
