// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // let interviewer know you are aware of multiple solutions to the problem
  // let them know that every is an advance js method to check each item of an array
  // let them know that this is doing twice as much work and is not the most efficient solution
  // propose a more direct solution
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
}

palindrome('abba');

module.exports = palindrome;

// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindrome(str) {
//   let reversed = str.split('').reduce((rev, char) => char + rev, '');
//   debugger;
//   return str === reversed;
// }

// function palindrome(str) {
//   let reversed = '';
//   for(let char of str) {
//     reversed = char + reversed;
//   }
//   return str === reversed;
// }
