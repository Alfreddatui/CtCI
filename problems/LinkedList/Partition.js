// Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. if x is contained within the list, the values of x only need
// to be after the elements less than x(see below). The partition element x can appear anywhere in the "right partition"
// it does not need to appear between the left and right patitions
// example:
// input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 (partitio = 5)
// output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

function partition(node, value) {
  // my approach will be similar like quick sort
  let leftP = node;
  let rightP = node;

  while(rightP != null) {
    if (rightP.value < value) {
      let temp = rightP.value;
      rightP.value = leftP.value;
      leftP.value = temp;
      leftP = leftP.next;
    }
    rightP = rightP.next;
  }
}

// above solutions is not really good because changing the value is bad + shifting array is bad too
function betterSolutions(head, value) {
  // create 2 linked list to be separated as bigger and lower, maintaining the start and end;
  let node = head;
  let beforeStart = null;
  let beforeEnd = null;
  let afterStart = null;
  let afterEnd = null;

  while(node != null) {
    if (node.value < value) {
      if (beforeStart == null) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      // console.log(node.value);
      if (afterStart == null) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }
  
    node = node.next;
  }
  afterEnd.next = null;


  if (beforeStart == null) {
    return afterStart;
  }

  console.log("printList(beforeStart)", printList(beforeStart));
  console.log("printList(afterStart)", printList(afterStart));

  beforeEnd.next = afterStart;
  return beforeStart;
}

function anotherSimpleSolution(head, value) {
  // putting node value that is bigger than value at tail and node value that is smaller at the head
  let node = head;
  let headP = node;
  let tailP = node;
  node = node.next;
  let next;

  while (node != null) {
    next = node.next;
    if (node.value < value) {
      node.next = headP;
      headP = node;
    } else {
      tailP.next = node;
      tailP = node;
    }

    node = next;
  }
  tailP.next = null;

  return headP;
}

// Import the data structures and helper function
const LinkedList = require("../../data-structures/linked-list");
const { printList } = require("../../helper/helper");


// initialization
const ll = new LinkedList();
// 1 -> 1 -> 1 -> 2 -> 3 -> 3 -> 3 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 6
// length 14
ll.insert(10);
ll.insert(5);
ll.insert(8);
ll.insert(5);
ll.insert(10);
ll.insert(2);
ll.insert(1);

// get the head pointer
let head = ll.getRoot();
console.log(printList(head));
head = anotherSimpleSolution(head, 6);
console.log(printList(head));
