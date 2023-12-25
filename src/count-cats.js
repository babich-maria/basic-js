const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;

  // Iterate through each row
  for (let row of matrix) {
      // Iterate through each element in the row
      for (let element of row) {
          // Check if the element is '^^'
          if (element === '^^') {
              count++;
          }
      }
  }

  return count;
}

module.exports = {
  countCats
};
