// Sort Stack: Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty

const { StackDS } = require("../../data-structures/stack");

function sortStack(stack) {
  // thought of process, we can maintain s2 to be sorted by using another temporary variable, so we put all elements one by one from s1 to s2 according to the place with a help of temporary variable tmp
  let stack2 = new StackDS();
  let tmp;

  // first step
  stack2.push(stack.pop());

  while(!stack.isEmpty()) {
    tmp = stack.pop();
    let counter = 0;

    while(!stack2.isEmpty() && stack2.peek() > tmp) {
      stack.push(stack2.pop());
      counter++;
    }
  
    stack2.push(tmp);
    for (let i = 0; i < counter; i++) {
      stack2.push(stack.pop());
    }
  }

  while(!stack2.isEmpty()) {
    stack.push(stack2.pop());
  }
}

let stack = new StackDS();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);
stack.push(1);
sortStack(stack);
stack.printS();

// this approach time complexity is O(n^2) since we are using doulbe when and we are putting the correct order one by one + space complexity O(n) -> additional stack
