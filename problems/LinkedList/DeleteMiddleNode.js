// Delete Middle Node: Impelement an algorithm to delete a node in the middle, any node but the first and last node
// not necessarily the exact middle of a single linked list, given only access to that node.
// example: input => a -> b -> c -> d -> e -> f
// you only have access to the selected node

function deleteMiddle(node) {
  node.value = node.next.value;
  node.next = node.next.next;
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
deleteMiddle(head.next.next.next);
console.log(printList(head));
