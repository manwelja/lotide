const assertEqual = require('./assertEqual');

const head = function(arrFull) {

  if (arrFull.length === 0) {
    return "undefined";
  } else {
    return arrFull[0];
  }
};

module.exports = head;
