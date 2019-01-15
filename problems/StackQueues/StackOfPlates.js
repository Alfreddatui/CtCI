// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when a previous stack exceeds some threshold.
// Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack(that is, pop() should return the same values as it would if there were just a single stack).

// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

let { StackDS } = require("../../data-structures/stack");

function SetOfStacks() {
  // thought of process
  // creating an array of Stack that will increase once the current stack is full
  this.set = [new StackDS()];
  this.index = 0;
}

SetOfStacks.prototype.push = function (value) {
  if (this.set[this.index].isFull()) {
    this.set.push(new StackDS());
    this.index++;
  }
    this.set[this.index].push(value);
}

SetOfStacks.prototype.pop = function () {
  if (this.set[this.index].isEmpty()) {
    if (this.index == 0) {
      return "Stack is empty";
    }
    this.set.pop();
    this.index--;
  }
  this.set[this.index].pop();
  if (this.set[this.index].isEmpty() && this.index != 0) {
    this.set.pop();
    this.index--;
  }
}

SetOfStacks.prototype.printStacks = function() {
  this.set.forEach(stack => {
    stack.printS();
  })
}

// Follow UP
SetOfStacks.prototype.popAt = function (index) {
  // get size
  // console.log()
  let size = this.set[this.index].size;
  let selectedStack = parseInt(index / size);
  let realIndex = index % size;
  let tmpMemory = [];
  while(this.set.length != selectedStack + 1) {
    tmpMemory.push(this.set[this.index].pop());
    if (this.set[this.index].isEmpty()) {
      this.set.pop();
      this.index--;
    }
  }
  for (let i = size; i > realIndex; i--) {
    tmpMemory.push(this.set[this.index].pop());
  }

  // pop the value
  let result = tmpMemory.pop();

  // return the value
  while(tmpMemory.length != 0) {
    if (this.set[this.index].isFull()) {
      this.set.push(new StackDS());
      this.index++;
    }
    let tmp = tmpMemory.pop();
    this.set[this.index].push(tmp);
  }
  return result;
}

let setStack = new SetOfStacks();
setStack.push(1);
setStack.push(2);
setStack.push(3);
setStack.push(4);
setStack.push(5);
setStack.push(6);
setStack.push(7);
setStack.push(8);
setStack.push(9);
setStack.push(10);
setStack.push(11);
console.log("PRINT");
setStack.printStacks();
console.log(setStack.popAt(4));
setStack.printStacks();