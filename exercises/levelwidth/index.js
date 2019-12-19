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

function levelWidth(root) {
  // width means BF - add children to the end
  const counters = [0];
  const nodes = [root, 's'];

  while (nodes.length > 1) {
    const node = nodes.shift();
    if (node === 's') {
      counters.push(0);
      nodes.push('s');
    } else {
      nodes.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
