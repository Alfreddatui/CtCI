// Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit.
// The digits are stored in reverse order, such that the 1's digits is at the head of the list
// Write a function that adds the two numbers and returns the sum as a linked list

function getValueLinkedListReverse(head) {
	let node = head;
	let num = 0;
	let count = 0;

	while(node != null) {
		num += node.value * Math.pow(10, count);
		node = node.next;
		count++;
	}

	return num;
}

function getLinkedListFromValueReverse(value) {
  const ll = new LinkedList();

	while(value > 0) {
		ll.insert(value % 10);
		value = parseInt(value/10);
  }

	return ll.getRoot();
}

function sumListReverse(head1, head2) {
	// thought of process,
	// remembering this is singly linked list, we can’t track back the previous number
	// so to build the actual number for each linked list, We do something like”
	// make a deep-counter, every time we node.next, count + 1, and the number =  number + node.value*pow(10, counter)
	// for this, it is better to create a new function so we can use it twice
	// and add both numbers and for the result, while(result != 0), create a new node with value result%10. And then result = parseInt(result/10);

	let num1 = getValueLinkedListReverse(head1);
	let num2 = getValueLinkedListReverse(head2);

	let result = num1 + num2;

	return getLinkedListFromValueReverse(result);
}

// Import the data structures and helper function
const { LinkedList, Node } = require("../../data-structures/linked-list");
const { printList } = require("../../helper/helper");


// initialization
const ll1 = new LinkedList();
ll1.insert(7);
ll1.insert(1);
ll1.insert(6);
const ll2 = new LinkedList();
ll2.insert(5);
ll2.insert(9);
ll2.insert(2);

// get the head pointer
let head1 = ll1.getRoot();
let head2 = ll2.getRoot();
// console.log(printList(head));
let result = sumListReverse(head1, head2);
console.log(printList(result));

// FOLLOW UP: Suppose the digist are stored in forward order. Repeat the above problem

function getValueLinkedList(head) {
	let node = head;
	let num = 0;

	while(node != null) {
		num = num*10 + node.value;
		node = node.next;
	}

	return num;
}

function getLinkedListFromValue(value) {
  const ll = new LinkedList();

	while(value > 0) {
		ll.insertHead(value % 10);
		value = parseInt(value/10);
  }

	return ll.getRoot();
}

function sumList(head1, head2) {
  // thought of process,
  // similar like above but the function logic is
  // to read from the linked list, number =  number*10 + node.value
  // and to convert value to linkedlist, the result:
  // is the same but instead of adding tail, we add from head


	let num1 = getValueLinkedList(head1);
	let num2 = getValueLinkedList(head2);

	let result = num1 + num2;

	return getLinkedListFromValue(result);
}

// initialization
const ll3 = new LinkedList();
ll3.insert(6);
ll3.insert(1);
ll3.insert(7);
ll3.insert(6);
ll3.insert(1);
ll3.insert(7);
const ll4 = new LinkedList();
ll4.insert(2);
ll4.insert(9);
ll4.insert(5);

// get the head pointer
let head3 = ll3.getRoot();
let head4 = ll4.getRoot();
let result2 = sumList(head3, head4);
console.log(printList(result2));


// After reading the solutions!
// The book come up with a better solution by adding one by one and directly create the linkedlist

function recursive(node1, node2, carry) {
	if (node1 == null && node2 == null && carry == 0) {
		return null;
	}
	let value =  carry;

	if (node1 != null) {
		value += node1.value;
	}

	if (node2 != null) {
		value += node2.value;
	}

	let result = new Node(value % 10);

	if (node1 != null || node2 != null) {
		let next = recursive(node1 == null ? null : node1.next, node2 == null ? null : node2.next, value > 10 ? 1 : 0);
		result.next = next;
	}

	return result;
}

// initialization
const ll5 = new LinkedList();
ll5.insert(7);
ll5.insert(1);
ll5.insert(6);
ll5.insert(7);
ll5.insert(1);
ll5.insert(6);
const ll6 = new LinkedList();
ll6.insert(5);
ll6.insert(9);
ll6.insert(2);

// get the head pointer
let head5 = ll5.getRoot();
let head6 = ll6.getRoot();
let result3 = recursive(head5, head6, 0);
console.log(printList(result3));
