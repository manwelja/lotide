const assert = require('chai').assert;
const {findKeyByValue} = require('../index');

describe("#findKeyByValue", () => {
  it("returns 'sci-fi'  when ({ sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire'}, 'The Expanse') is passed in", () => {
    const input = { "sci_fi": 'The Expanse', "comedy": 'Brooklyn Nine-Nine', "drama":  'The Wire'};
    assert.strictEqual(findKeyByValue(input , 'The Expanse'), 'sci_fi');
  });

});
