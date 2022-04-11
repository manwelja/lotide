const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
const result1 = tail([5,6,7]);
assertEqual(result1[0], 6);
assertEqual(result1[1], 7);

const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2[0], "Lighthouse");
assertEqual(result2[1], "Labs");

const result3 = tail([5]);
assertEqual(result3.length, 0);

const result4 = tail([]);
assertEqual(result4.length, 0);