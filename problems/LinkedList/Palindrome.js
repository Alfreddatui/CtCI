// Palindrome: Implement a function to check if a linked list is a palindrome

function getLength(head) {
  let node = head;
  let count = 0;

  while (node != null) {
    count++;
    node = node.next;
  }

  return count;
}

function reverseLL(head, index) {
  // reverse linkedlist from 0 to index (excluding)
  let prevNode = null;
  let currNode = head;
  let nextNode;
  let counter = 0;


  while(currNode != null) {
    if (counter >= index) {
      break;
    }
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;

    counter++;
  }

  head.next = currNode;
  return prevNode;
}

function checkPalindrome(head) {
	// thought process
	// palindrome = from behind and front need to be the same
	// one approach is to go through the linked list to get the total length
	// and then if length even, after passing half, check whether the next is inside the array and ordered from behind
	// if the length is even, just skip one. (This solution is O(n) time complexity and O(n) space complexity

  // if you want to state brute force, we can check for each one by one, and make sure that the distance from start and end is the same. Time complexity O(n^2)
  
  // or else, you can swap the half first and check with the other half, and then change it back lol
  // if you have even length, reverse from 0 to length/2(excluding length/2), if it is odd length, reverse from 0 to parseInt(length/2)(excluding)
  // this will lead to O(n) time complexity and O(1) space

  // check length of linkedList
  let length = getLength(head);
  let currHead = head;

  currHead = reverseLL(currHead, parseInt(length/2));
  ///////////// at this state, the first half is already reversed

  // now check first half and second half is the same
  let firstHalf = currHead;
  let secondHalf = currHead;

  // set secondHalf to the second half position
  let counter = 0;
  while(counter < length/2) {
    secondHalf = secondHalf.next;
    counter++;
  }

  while(secondHalf != null) {
    if (firstHalf.value != secondHalf.value) {
      // reverse back the linkedlist
      reverseLL(currHead, parseInt(length/2));
      return false;
    }

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  
  // reverse back the linkedlist
  currHead = reverseLL(currHead, parseInt(length/2));
  return true;
}



// Import the data structures and helper function
const { LinkedList } = require("../../data-structures/linked-list");
const { printList } = require("../../helper/helper");

// initialization
const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
// ll.insert(5);
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);

// get the head pointer
let head = ll.getRoot();
console.log(printList(head));
let result = checkPalindrome(head);
console.log(printList(result));

// there are 3 solutions in the book
// 1st one, the book create a new linked list by reversing the whole linkedlist and compare it with the original LL
// this solutions will lead to O(n) time complexity and O(n) space

// 2nd solution, the book assuming the length is unknown. They are using stack with 2 pointers that run in the original LL
// one move twice (node.next.next) and the slow one is one step (for each step, push to stack). when the fast runner reach
// the end, stack start to pop and compare with the slow stack pop result()
// this will lead to O(n) time complexity and O(n/2) => O(n) space.

// 3rd solutions, using recursive, a bit complicated, read at the book
