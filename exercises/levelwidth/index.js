// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// BFS
// input node output array
function levelWidth(root) {
  // check input
  // counters array
  const counters = [0];
  // nodes array starting off with root and stopper
  const nodes = [root, 's'];
  // iterate through nodes while its length is greater than 1
  while (nodes.length > 1) {
    // get current node with shift
    const node = nodes.shift();
    // add 0 to counters if stopper
    if (node === 's') {
      counters.push(0);
      nodes.push('s');
    } else {
      // otherwise add children to nodes
      nodes.push(...node.children);
      // increment last count in counters
      counters[counters.length - 1]++;
    }
  }
  // return counters
  return counters;
} // O(n) time O(n) space

module.exports = levelWidth;
