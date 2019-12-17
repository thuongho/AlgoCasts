// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// another solution is to check the position to the left to see if it is a space
// if so, capitalize the current letter
function capitalize(str) {
  const sentence = [];

  for (let word of str.split(' ')) {
    sentence.push(word[0].toUpperCase() + word.slice(1));
  }

  return sentence.join(' ');
}

module.exports = capitalize;

// function capitalize(str) {
//   return str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
// }
