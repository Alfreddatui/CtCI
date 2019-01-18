// for this case, we create a binary search tree

class binaryTree {
  constructor() {
    this.root = null;
  }

  insert (value) {
    let node = this.root;
    
    if (node) {
      while(node != null) {
        if (value > node.value) {
          if (node.right != null) {
            node = node.right;
          } else {
            node.right = new Node(value);
            break;
          }
        } else {
          if (node.left != null) {
            node = node.left;
          } else {
            node.left = new Node(value);
            break;
          }
        }
      }
    } else {
      this.root = new Node(value);
    }
  }

  printTree() {
    let node = this.root;
    let total = "";
    total = [total];
    this.recPrint(node, total);
    return total[0];
  }

  recPrint(node, total) {
    if (node == null) {
      return;
    }
    total[0] += "(";
    this.recPrint(node.left, total);
    total[0] += " " + node.value + " ";
    this.recPrint(node.right, total);
    total[0] += ")";
  }

  getRoot() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrder(node) {
  if (node == null) {
    return;
  }
  console.log(node.value);
  inOrder(node.left);
  inOrder(node.right);
}

function preOrder(node) {
  if (node == null) {
    return;
  }
  preOrder(node.left);
  console.log(node.value);
  preOrder(node.right);
}

function postOrder(node) {
  if (node == null) {
    return;
  }
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

let bt = new binaryTree();
bt.insert(32);
bt.insert(15);
bt.insert(11);
bt.insert(17);
bt.insert(10);
bt.insert(12);
bt.insert(14);
bt.insert(16);
bt.insert(20);

bt.insert(46);
bt.insert(36);
bt.insert(58);
bt.insert(34);
bt.insert(40);
bt.insert(50);
bt.insert(100);
console.log(bt.printTree());

const root = bt.getRoot();
// inOrder(root);
// 32
// 15
// 11
// 10
// 12
// 14
// 17
// 16
// 20
// 46
// 36
// 34
// 40
// 58
// 50
// 100

// preOrder(root);
// 10
// 11
// 12
// 14
// 15
// 16
// 17
// 20
// 32
// 34
// 36
// 40
// 46
// 50
// 58
// 100

postOrder(root);
// 10
// 14
// 12
// 11
// 16
// 20
// 17
// 15
// 34
// 40
// 36
// 50
// 100
// 58
// 46
// 32
