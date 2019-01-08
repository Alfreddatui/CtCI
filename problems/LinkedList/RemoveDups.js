// Remove Dups: Write code to remove duplicates from an unsorted linked list.

// Follow up: How would you solve this problem if a temporary buffer is not allowed?

function removeDups(head) {
	// two approach:
	// 1st: O(n) time complexity but with O(n) space by using hash tables as we progress through the linked list.
	// 2nd: O(n^2) time complexity by using two pointers that iterate through every possible pair. O(1) space

  let node = head;

  // 1st
  // let hash = {};
  // let previous = node;

  // while (node != null) {
  //   if (hash[node.value] == 1) {
  //     previous.next = node.next;
  //     node = previous.next;
  //   } else {
  //     hash[node.value] = 1;
  //     previous = node;
  //     node = node.next;
  //   }
  // }
  
  // 2nd
  let i = node;

  while(node != null) {
    let node2 = node;
    while(node2.next != null) {
      if (node.value == node2.next.value) {
        node2.next = node2.next.next;
      } else {
        node2 = node2.next;
      }
    }
    node = node.next;
  }
}

// Import the data structures
const { LinkedList } = require("../../data-structures/linked-list");

// initialization
const ll = new LinkedList();
ll.insert(1);
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
removeDups(head);
console.log(ll.printList());
