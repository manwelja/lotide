// We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
const letterPositions = function(sentence) {
  const results = {};
  const lowerSentence = sentence.toLowerCase().split('');

  // logic to update results here
  lowerSentence.forEach((letter, index) => {
    if (letter !== ' ') {
      if (Object.keys(results).indexOf(letter) < 0) {
        results[letter] = [index];
      } else {
        results[letter].push(index);
      }
    }
  });

  return results;

};
module.exports = letterPositions;

