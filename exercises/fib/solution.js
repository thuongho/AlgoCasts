// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const results = fn.apply(this, args);
    cache[args] = results;
    return results;
  }
}

// O(2^n) - exponential
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;

// // O(n) - linear 
// // for every increase in n we have to calc one number additional number
// function fib(n) {
//   const arr = [];
//   // i++ is the additional number
//   // alt: we have a for loop that will iterate over a close set, 1:1
//   // starting out with a fix number, always incrementing by one up to a fix target
//   for (let i = 0; i <= n; i++) {
//     if (i < 2) {
//       arr.push(i);
//     } else {
//       arr.push(arr[i - 1] + arr[i - 2]);
//     }
//   }
//   return arr[arr.length - 1];
// }

// function fib(n, results = [0, 1]) {
//   if (results.length - 1 >= n) {
//     return results[n];
//   }

//   const add = results[results.length - 1] + results[results.length - 2];
//   results.push(add);
//   return fib(n, results);
// }

// O(2^n) - exponential
// for every increase in n causes dramatic increase in time
// hey this looks really slow, how can we speed it up? memoization
// save the ran function (fib(4)) into memory and return that result from memory everytime the same function is called (fib(4))
// function memoize(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     // run the fib sequence and save it into cache
//     const result = fn.apply(this, args);
//     cache[args] = result;
//     return result;
//   }
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// // super charge the fib
// fib = memoize(fib);


// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // input int cuz it's index output is a number which is an int
// function fib(n) {
//   // break case n less than 2
//   if (n < 2) {
//     return n;
//   }
//   // recursively add minus 1 and minus 2
//   return fib(n - 1) + fib(n - 2);
// } // O(2^n) time  O(n) space as the height of the tree is will be pushed to the call stack

// // since the recursion is redundant, I'm going to memoize this function where I return the cache function
// function memoize(fn) {
//   // cache library
//   const cache = {};
//   // return a super charged function
//   return function(...args) {
//     // check if cached answer exists and return it
//     if (cache[args]) {
//       return cache[args];
//     }
//     // save to cache
//     // const result = fn.apply(this, args);
//     const result = fn.apply(null, [...args]);
//     cache[args] = result;
//     return result;
//   }
// }

// fib = memoize(fib); // O(n) time O(n) space

// module.exports = fib;
