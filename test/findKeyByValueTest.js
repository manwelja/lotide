const {assert} = require('chai');
const {findKeyByValue} = require('../index');

describe("#findKeyByValue", () => {
  it("returns the correct key name when a key value is passed in", () => {
    const input = { "sci_fi": 'The Expanse', "comedy": 'Brooklyn Nine-Nine', "drama":  'The Wire'};
    assert.strictEqual(findKeyByValue(input , 'The Expanse'), 'sci_fi');
  });

});
