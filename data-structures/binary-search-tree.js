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
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


let bt = new binaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(1.5);
bt.insert(99);
bt.insert(0);
console.log(bt.printTree());
