// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // base case
  if (row === n) {
    return;
  }

  // condition to print stair
  if (stair.length === n) {
    console.log(stair);
    // increment the row, reset stair
    // return to stop anything other code below to run
    return steps(n, row + 1);
  }

  const add = row < stair.length ? ' ' : '#';
  // increment stair
  steps(n, row, stair + add);
}

module.exports = steps;

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(('#'.repeat(i) + (' '.repeat(n - i))));
//   }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
