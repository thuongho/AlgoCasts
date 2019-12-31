// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// input str output boolean
function palindrome(str) {
  // check input
  // get string length
  const len = str.length;
  // check is even or odd
  const isEven = len % 2 === 0;
  // get midpoint
  const midpoint = isEven ? len / 2 : Math.floor(len / 2);
  // split the string into equal parts
  const left = str.slice(0, midpoint);
  console.log('left', left);
  const right = isEven ? str.slice(midpoint) : str.slice(midpoint + 1);
  console.log('right', right);
  // reverse second part
  // return false if ref start doesn't equal ref end
  return left === right.split('').reverse().join('');
} // O(n) time O(n)

module.exports = palindrome;
