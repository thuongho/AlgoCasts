// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// input int cuz it's index output is a number which is an int
function fib(n) {
  // break case n less than 2
  if (n < 2) {
    return n;
  }
  // recursively add minus 1 and minus 2
  return fib(n - 1) + fib(n - 2);
} // O(2^n) time  O(n) space as the height of the tree is will be pushed to the call stack

// since the recursion is redundant, I'm going to memoize this function where I return the cache function
function memoize(fn) {
  // cache library
  const cache = {};
  // return a super charged function
  return function(...args) {
    // check if cached answer exists and return it
    if (cache[args]) {
      return cache[args];
    }
    // save to cache
    // const result = fn.apply(this, args);
    const result = fn.apply(null, [...args]);
    cache[args] = result;
    return result;
  }
}

fib = memoize(fib); // O(n) time O(n) space

module.exports = fib;
