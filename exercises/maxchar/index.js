// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// anything around counting the number of chars
//  whats the most common char in the string
// does string A have the same chars as string B (anagram)
// does the given string have the repeated chars in it
function maxChar(str) {
  const lib = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // undefined + 1 > null
    lib[char] = lib[char] + 1 || 1;
  }

  for (let char in lib) {
    if (lib[char] > max) {
      max = lib[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}

maxChar("abcccccccd");

module.exports = maxChar;

// function maxChar(str) {
//   const lib = {};
//   str.split('').forEach((char) => {
//     if (lib[char]) {
//       lib[char]++;
//     } else {
//       lib[char] = 1
//     }
//   });
  
// }
