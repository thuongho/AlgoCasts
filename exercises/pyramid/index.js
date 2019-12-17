// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level);
}

module.exports = pyramid;

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1)/ 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col <= midpoint + row && col >= midpoint - row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

// function pyramid(n, row = 0, col = 0, level = '') {
//   if (row === n) {
//     return;
//   }

//   const midpoint = Math.floor((n * 2 - 1) / 2);

//   if (col < 2 * n - 1) {
//     if (col >= midpoint - row && col <= midpoint + row) {
//       level += '#';
//     } else {
//       level += ' ';
//     }
//     return pyramid(n, row, col + 1, level);
//   }

//   console.log(level);
//   pyramid(n, row + 1);
// }
