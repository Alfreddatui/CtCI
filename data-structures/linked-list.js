// advantages:
// items can be added in the middle of the list
// no fixed size

// disadvantages:
// no random access => arr[4], to get the data, time complexit is O(n)
// dynamic memory allocation and pointers are required that makes the code complicated and increase the risk of memory leaks and segment faults
// larger overheads compare to a normal array because it use pointer.


// https://www.quora.com/When-would-you-use-a-linked-list
// when to use:
// when we need constant time insertion/deletions from the list( dynamic array time is not constant, most of the time O(1) but when increaseing the size, O(n))
// dont know how many items will be in the list.
// we dont need random access elements
// want to be able to insert in the middle of the array.

// dont use:
// you need random access element
// you know the number of element
// memory is a concern
// we need speed when iterating throgh all the elements in sequence.

class LinkedList {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = this.root;
    if (!node) {
      this.root = new Node(value);
    } else {
      while(node.next != null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
  }

  insertAt(value, index) {
    if (index == 0) {
      let temp = this.root;
      this.root = new Node(value);
      this.root.next = temp;
    } else {
      let node = this.root;
      for (let i = 0; i < index - 1; i++) {
        node = node.next;
      }
      const temp = node.next;
      node.next = new Node(value);
      node.next.next = temp;
    }
   }

  getRoot() {
    return this.root;
  }

  printList() {
    let node = this.root;
    let total = "";
    
    if (node == null) {
      return null;
    }

    while(node != null) {
      total += node.value + " -> ";
      node = node.next;
    }

    total = total.slice(0, total.length - 4);
    return total;
  }

  insertHead(value) {
    let temp = this.root;
    this.root = new Node(value);
    this.root.next = temp;
  }

  insertTail(value) {
    let node = this.root;
    if (!node) {
      this.root = new Node(value);
    } else {
      while(node.next != null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// let ll = new LinkedList();
// let root = ll.getRoot();
// ll.insert(1);
// ll.insert(2);
// ll.insert(3);
// ll.insert(5);
// ll.insert(6);
// ll.insertAt(4, 3);
// ll.insertHead(0);
// ll.insertTail(7);
// console.log(ll.printList());

module.exports = LinkedList;
