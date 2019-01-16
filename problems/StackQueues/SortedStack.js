const { StackDS } = require("../../data-structures/stack");

function SortStack() {
  // thought process
  // We can use extra temporary stack
  // so our appraoch is to keep maintaining the order of the stack, assume our 2 stacks are s1 and s2
  // remember that our s1 will always ordered from bottom to top decreasing
  // while s2 will always ordered, from bottom to top increasing
  // and s1 and s2 will always related such as all elements in s2 (s2.peek() will be the biggest element in s2), will always smaller than all elements in s1


  // there are some cases:

  // if the push value is bigger than s1 top, then we pop s1 until s1.peek is bigger than value or s1 empty, and we push to s1
  // if the push value is smaller than s1 top, then we pop s2 until s2.peek is smaller than value or s2 empty, and we push to s1
  // and for popping, we move all s2 until it is empty, and pop s1 (which is the smalles element)

  this.s1 = new StackDS();
  this.s2 = new StackDS();
}

SortStack.prototype.push = function (value) {
  let s1Top = this.s1.peek();
  if (!this.s1.isEmpty()) {
    if (value >= s1Top) {
      while (!this.s1.isEmpty() && this.s1.peek() < value) {
        this.s2.push(this.s1.pop());
      }
      this.s1.push(value);
    } else {
      while(!this.s2.isEmpty() && this.s2.peek() > value) {
        this.s1.push(this.s2.pop());
      }
      this.s1.push(value);
    }
  } else {
    this.s1.push(value);
  }
}

SortStack.prototype.pop = function () {
  while(!this.s2.isEmpty()) {
    this.s1.push(this.s2.pop());
  }
  return this.s1.pop();
}

SortStack.prototype.printSS = function () {
  this.s1.printS();
  this.s2.printS();
}

SortStack.prototype.isEmpty = function () {
  return this.s1.isEmpty() && this.s2.isEmpty();
}

SortStack.prototype.peek = function () {
  while(!this.s2.isEmpty()) {
    this.s1.push(this.s2.pop());
  }
  return this.s1.peek();
}

let sortStack = new SortStack();

sortStack.push(10);
sortStack.push(9);
sortStack.push(8);
sortStack.push(7);
sortStack.push(5);
sortStack.push(4);
sortStack.push(3);
sortStack.push(2);
sortStack.push(1);
console.log("CHECK");
sortStack.push(6);
sortStack.printSS(); // half half
console.log("CHECK");
sortStack.push(6.5); // push 6 to s2, and push 6.5 to s1
sortStack.printSS(); 
console.log("CHECK");
sortStack.push(0); // push all to s1, push 0 to s1
sortStack.printSS(); 
console.log("CHECK");
sortStack.push(11); // push all to s2, push 11 to s1
sortStack.printSS();
console.log(sortStack.peek());
sortStack.printSS(); // half half
