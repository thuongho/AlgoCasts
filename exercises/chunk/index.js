// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// input array and int output is nested array
function chunk(array, size) {
  // check input
  // empty final array
  const result = [];
  // counter
  let counter = 0;
  // while loop where counter is less than array length
  while (counter < array.length) {
    // create sub array with slice from counter to counter + n (not inclusive)
    result.push(array.slice(counter, counter + size));
    // increment counter by n
    counter += size;
  }
  // return
  return result;
} // O(n) O(n)

module.exports = chunk;
