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

  getRoot(value) {
    // console.log("WOW");
    return this.root;
  }

  printList() {
    let node = this.root;
    let total = "";

    while(node.next != null) {
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
    while(node.next != null) {
      node = node.next;
    }
    node.next = new Node(value);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let ll = new LinkedList();
let root = ll.getRoot();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(5);
ll.insert(6);
ll.insertAt(4, 3);
ll.insertHead(0);
ll.insertTail(6)
console.log(ll.printList());