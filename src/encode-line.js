const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedString = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
      // Check if the current character is the same as the next one
      if (str[i] === str[i + 1]) {
          count++;
      } else {
          // Append the count and character to the encoded string
          encodedString += (count > 1 ? count : '') + str[i];
          count = 1; // Reset the count for the next character
      }
  }

  return encodedString;
}


module.exports = {
  encodeLine
};
