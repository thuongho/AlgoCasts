// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// input string output boolean
function anagrams(stringA, stringB) {
  // map the chars of stringA and stringB with count
  const mapA = mapChar(stringA);
  const mapB = mapChar(stringB);
  // check if length of stringA is the same as stringB
  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }
  return true;
} // O(a + b) space O(n) time

// build a helper to map out a string
// remove non chars
function mapChar(str) {
  // map
  const charMap = {};
  // for loop
  for (let char of str.toLowerCase().replace(/[^\w]/g, '')) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
