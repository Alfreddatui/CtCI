// Minimal Tree: Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height

const { binaryTree, Node } = require("../../data-structures/binary-search-tree");

function createBinarySearchTree(arr, start, end) {
  // thought process:
  // we know that if we brutally connect all the node into a tree, the depth will be n because it is a sorted array (increasing order)
  // minimal height is when left tree and right tree has the same number of nodes
  // which means we can just take the middle part of our array as our root, and do it recursively for the left and right (respectively separate the array)

  if (start >= end) {
    return;
  }

  const midpointIndex = parseInt((end+start)/2);
  console.log(start, end, midpointIndex)
  let node = new Node(arr[midpointIndex]);

  node.left = createBinarySearchTree(arr, start, midpointIndex); // dont use slice as slice create a new memory, use a pointer to have constant space complexity
  node.right = createBinarySearchTree(arr, midpointIndex + 1, end);

  return node; // return the root
}

const { printTree } = require("../../helper/helper");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let root = createBinarySearchTree(arr, 0, arr.length);
console.log(printTree(root));

// this approach time complexity is O(n) and space complexity is O(n) because we are creating a new binary search tree