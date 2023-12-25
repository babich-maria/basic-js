const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameOccurrences = {};

  for (let i = 0; i < names.length; i++) {
      const originalName = names[i];

      // Check if the name already exists in the occurrences
      if (nameOccurrences[originalName] === undefined) {
          nameOccurrences[originalName] = 1;
      } else {
          // Append a suffix to make the name unique
          const newName = `${originalName}(${nameOccurrences[originalName]++})`;
          
          // Update the array with the new unique name
          names[i] = newName;

          // Update the occurrences for the new name
          nameOccurrences[newName] = 1;
      }
  }

  return names;
}

module.exports = {
  renameFiles
};
