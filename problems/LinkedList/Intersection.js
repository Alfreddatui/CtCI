// Intersection: Given two singly linked list, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value.
// That is, if the kth node of the first ll is the excat same node (by reference) as the jth node of the second linked list, then they are intersecting.

function getLength(head) {
  let node = head;
  let length = 0;

  while (node != null) {
    length++;
    node = node.next;
  }

  return length;
}

function intersection(ll1, ll2) {
  // thought process
  // because it is single linked list, we cannot check back
  // one approach is:
  // assume 2 linkedlist is ll1, ll2
  // we reverse ll1, then if ll2 is intersecting, then ll2 will be changed too.
  // and then put into stack or arrray all elements in ll2, and pop one by one while checking with reversed ll1 (if they are intersecting, they end of ll2 will be the same with start of reversed ll1)
  // this solutions lead to O(n) time complexity and O(n) space;

  // other solutions is to find length for both ll1 and ll2. assume the longer linked list is x and short is y.
  // create 2 pointers(xp and yp), 1 for x one for y.
  // move x until the remaining x length = y.
  // and from there move forward together xp and yp while comparing it together.
  // this will lead to O(m+n) time complexity and O(1) space.

  const len1 = getLength(ll1);
  const len2 = getLength(ll2);
  let long, short, lenL, lenS;

  if (len1 > len2) {
    long = ll1;
    short = ll2;
    lenL = len1;
    lenS = len2;
  } else {
    long = ll2;
    short = ll1;
    lenL = len2;
    lenS = len1;
  }

  for (var i = 0; i < lenL - lenS; i++) {
    long = long.next;
  }

  // at this state, the remaining length long is equal to lenS
  while(long != null) {
    if (long === short) {
      return long;
    }
    short = short.next;
    long = long.next;
  }

  return null;
}


// Import the data structures and helper function
const { Node } = require("../../data-structures/linked-list");
const { printList } = require("../../helper/helper");


// initialization
let ll1 = new Node(0);
let ll2 = new Node(11);
let head1 = ll1;
let head2 = ll2;

ll1.next = new Node(1);
ll1 = ll1.next;

ll1.next = new Node(2);
ll1 = ll1.next;

ll1.next = new Node(3);
ll1 = ll1.next;

ll1.next = new Node(4);
ll1 = ll1.next;

ll2.next = new Node(22);
ll2 = ll2.next;

ll2.next = new Node(33);
ll2 = ll2.next;

ll2.next = new Node(44);
ll2 = ll2.next;

let intersectionNode = new Node(5);
ll1.next = intersectionNode;
ll2.next = intersectionNode;

intersectionNode.next = new Node(6);
intersectionNode = intersectionNode.next;

intersectionNode.next = new Node(7);
intersectionNode = intersectionNode.next;

console.log(printList(head1));
console.log(printList(head2));

let result = intersection(head1, head2);
console.log(result ? printList(result) : result);

// after check the solution, the approach is the same!
// O(n) time complexity and O(1) space.
// the main thing is to make the linked list the same length by throwing the some first node of the longer linkedlist
