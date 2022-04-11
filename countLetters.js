const countLetters = function(sentence) {
  const results = {};
  const lowerSentence = sentence.toLowerCase();

  for (let letter of lowerSentence) {
    Object.keys(results).indexOf(letter) < 0 ? results[letter] = 1 : results[letter] ++;
  }
  console.log(results);
  return results;
};

module.exports = countLetters;