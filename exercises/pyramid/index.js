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

// input int n output console log each steps
function pyramid(n, row = 0, level = '') {
  // level
  // row keep track of row
  // columns in a level equal to n + n - 1 (2n - 1)
  // break case n is row
  if (row === n) {
    return;
  }

  // if level length is equal to 2n - 1 then increment row
  // log row
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // midpoint 2n - 1 / 2 floor
  const midpoint = Math.floor((2 * n - 1) / 2);
  // build out level
  // add row - 1 hash to each side of the midpoint
  if (level.length >= midpoint - row && level.length <= midpoint + row) {
    level += '#';
  } else {
    level += ' ';
  }
  return pyramid(n, row, level);
}

module.exports = pyramid;
