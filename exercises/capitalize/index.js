// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// input str output str
function capitalize(str) {
  // check input
  // split on space to make array of words
  return str.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
  // loop through array and return word with caps
  // join the array to get str
} // O(1) space O(n) time

module.exports = capitalize;
