// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let pos = 0;

  while (pos < array.length) {
    chunked.push(array.slice(pos, pos + size));
    pos += size;
  }

  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunkArr = [];
//   while (array.length) {
//     chunkArr.push(array.splice(0, size));
//   }
//   return chunkArr;
// }

// function chunk(array, size) {
//   const chunked = [];
  
//   for (let element of array) {
//     // subarray
//     const last = chunked[chunked.length - 1];

//     // if chunked is empty or if the last subarray is equal to the size
//     // push a new subarray
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }
