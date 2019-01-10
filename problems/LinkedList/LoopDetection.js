// Loop detectiopn: Given a circular linked list, impelment an algorithm that returns the node at the beginning of the loop
// DEFINITION: Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

function findLoop(head) {
	// thought of process
	// how to notice that we are in the loop? It might be just a sequence of linked list that are new but keep repeating 
	// ( 1 - 2 - 3 - 4 - 5 - 6 - 4 - 5 - 6 - 4 - 5 - 6) -> this is not looping yet
	// we can use slow and fast runner technique. One pointer with 1 step, 2nd pointer with 2 step. If it is loop, they will meet.
	// at this state, we know that we are inside a loop. How to get the starting node loop?
	// I was thinking of using hash tables, but this will lead us to O(m) space complexity with m is the length of loop
	
	// after reading the first hints, they indeed separate this question to two parts (detect loop and find where the loop start)
	// and from other hints, the runner technique, the pointers will meet at certain pattern.
	// or else, we can count the number of node inside the loop assume k
	// and we start from head and the k th node from head
	// and move together until they are the same.
  let node = head;
  let slow = node;
  let fast = node;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  // at this state, slow = fast and inside the loop. now we need to count the legnth of the loop:
  let loopLength = 1;
  slow = slow.next;

  while(slow != fast) {
    loopLength++;
    slow = slow.next;
  }

  // we know the length of the loop (loopLength)
  // now we need to move pointer with difference equal to loopLength, to point to the starting loop
  let first = node;
  let second = node;

  for (let i = 0; i < loopLength; i++) {
    second = second.next;
  }

  while(first != second) {
    first = first.next;
    second = second.next;
  }

  return first; // first = second and this is the start of the loop;
  // this solution lead to O(n) time complexity and O(1) space
}

// Import the data structures and helper function
const { Node } = require("../../data-structures/linked-list");
const { printList } = require("../../helper/helper");


// initialization

let ll1 = new Node(1);
let node = ll1;

node.next = new Node(2);
node = node.next;

node.next = new Node(3);
node = node.next;

node.next = new Node(4);
node = node.next;

node.next = new Node(5);
node = node.next;

let loop = new Node(6);
node.next = loop;
node = node.next;

node.next = new Node(7);
node = node.next;

node.next = new Node(8);
node = node.next;

node.next = new Node(9);
node = node.next;

node.next = new Node(10);
node = node.next;

node.next = loop;

console.log(findLoop(ll1));



// trying to find the pattern
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 6 -> 7 -> 8 -> 9 -> 6 -> 7 -> 8 -> 9 -> 6 -> 7 -> 8 -> 9 -> 6 -> 7 -> 8 -> 9 -> 6 -> 7 -> 8 -> 9 -> 

// Assume ? = 1
// Slow 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9
// Fast 1 3 5  7 9 2 4 6 8 1

// Assume ? = 2
// Slow 1 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9 2 3 4 5 6 7 8 9
// Fast 1 3 5  7 9 3 5 7 9

// Assume ? = 3
// Slow 1 2 3 4 5 6 7 8 9 3 4 5 6 7 8 9 3 4 5 6 7 8 9 3 4 5 6 7 8 9
// Fast 1 3 5  7 9 4 6 8

// Assume ? = 4
// Slow 1 2 3 4 5 6 7 8 9 4 5 6 7 8 9 4 5 6 7 8 9 4 5 6 7 8 9
// Fast 1 3 5  7 9 5 7

// Assume ? = 5
// Slow 1 2 3 4 5 6 7 8 9 5 6 7 8 9 5 6 7 8 9 5 6 7 8 9 
// Fast 1 3 5  7 9 6

// Assume ? = 6
// Slow 1 2 3 4 5 6 7 8 9 6 7 8 9 6 7 8 9 6 7 8 9 6 7 8 9
// Fast 1 3 5  7 9 7 9 7 9

// 1 4
// 2 5
// 3 6
// 4 7
// 5 8
// 6 9
// 7 6


// Assume ? = 7
// Slow 1 2 3 4 5 6 7 8 9 7 8 9 7 8 9 7 8 9 7 8 9
// Fast 1 3 5  7 9 8 7 9 8 7

// Assume ? = 8
// Slow 1 2 3 4 5 6 7 8 9 8 9 8 9 8 9 8 9 8 9
// Fast 1 3 5  7 9 9 9 9 9

// Assume ? = 9
// Answer is 9

// N = 9
// 1 1
// 2 9
// 3 8
// 4 7
// 5 6
// 6 9
// 7 7
// 8 9
// 9 9

// N = 10
// 1 1 -> 1, 10 (nth node, loop size)
// 2 10 -> 9, 9
// 3 9 -> 7, 8
// 4 8 -> 5, 7
// 5 7 -> 3, 6
// 6 6 -> 1, 5
// 7 9 -> 3, 4
// 8 10 -> 3, 3
// 9 9 -> 1, 2
// 10 10 -> 1, 1