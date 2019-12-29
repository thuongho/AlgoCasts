// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// O(n^2)
// move largest to the right
function bubbleSort(arr) {
  for (let o = 0; o < arr.length; o++) {
    for (let i = 0; i < arr.length - o; i++) {
      if (arr[i] > arr[i + 1]) {
        const lesser = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = lesser;
      }
    }
  }
  return arr;
}

// use indexofmin to swap left side with the smallest value
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
