const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Check if the input is a valid number
  if (typeof sampleActivity !== 'object' || !Array.isArray(sampleActivity)) {
    return false;
  }  
  const sampleNum = parseFloat(sampleActivity);
  if (isNaN(sampleNum) || sampleNum <= 0 || sampleNum > MODERN_ACTIVITY) {
      return false;
  }

  // Calculate the age using the formula
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleNum) / (0.693 / HALF_LIFE_PERIOD));

  return age;
}

module.exports = {
  dateSample
};
