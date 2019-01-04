// Return Kth to Last: Implement an algorithm to find ke kth to last element of a singly linked list.
// first of all, brute force is to make 2 pointer
// one point to mark the node (the one that will be returned)
// 2nd point to iterate to end (check the Node number from last node)
// just iterate through for every node.

// But this approach complexity is O(n^2), and the bottleneck is because we keep trying to check the length.
// So to optimize that part, it is better to find the length of the linkedlist.

// function kLast(head, k) {
// 	// find length of the linkedList
// 	let node = head;
// 	let ln = 0;
// 	while(node != null) {
// 		ln++;
// 		node = node.next;
//   }
  
//   console.log("Length:", ln);

// 	node = head;
// 	let count = 0;
// 	while(count < ln - k) {
// 		count++;
// 		node = node.next;
// 	}

// 	return node;
// }

// function recursiveSol(node, k) {
//   if (node == null) {
//     return 0;
//   }

//   let count = recursiveSol(node.next, k) + 1;
//   if (count == k) {
//     // return node;
//     console.log(node);
//   }
//   return count;
// }

// use array for count to have "pass by reference" attribute in Javascript
// function recursive2(node, k, count) {
//   if (node == null) {
//     return 0;
//   }

//   let nd = recursive2(node.next, k, count);
//   count[0] = count[0] + 1;

//   if (count[0] == k) {
//     return node;
//   }

//   return nd;
// }

// use 2 pointer which kinda similar by finding the length;
function twoPointer(node, k) {
  if (node == null) {
    return null;
  }

  let p1 = node;
  let p2 = node;
  for (let i = 0; i < k; i++) {
    p2 = p2.next;
  }
  
  while (p2 != null) {
    p2 = p2.next;
    p1 = p1.next;
  }

  return p1;
}

// Import the data structures and helper function
const LinkedList = require("../../data-structures/linked-list");
const { printList } = require("../../helper/helper");


// initialization
const ll = new LinkedList();
// 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 6
// length 14
ll.insert(1);
ll.insert(1);
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(3);
ll.insert(3);
ll.insert(3);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.insert(5);
ll.insert(6);
ll.insert(6);

// get the head pointer
const head = ll.getRoot();
// let count = [0]
// const kLastNode = recursive2(head, 5, count);
// let count = [0]
const kLastNode = twoPointer(head, 5);
console.log(printList(kLastNode));
