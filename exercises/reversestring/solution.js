// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 3 with reduce
function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('apple');

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// solution 2 without reverse
// function reverse(str) {
//   let reversed = '';
//   // use for of instead of old for loop to avoid errors
//   for (let char of str) {
//     reversed = char + reversed;
//   }  
//   return reversed;
// }