// function Stacks() {
//   this.data = [];
//   this.top = 0;
// }

// Stacks.prototype.push = function(value) {
//   this.data[this.top++] = value;
// }

// Stacks.prototype.pop = function() {
//   return this.data[--this.top];
// }

// Stacks.prototype.peek = function () {
//   return this.data[this.top - 1];
// }

// Stacks.prototype.isEmpty = function () {
//   return this.top == 0 ? true : false;
// }

class Stacks {
  constructor(arr) {
    this.data = arr ? arr : [];
    this.top = 0;
  }

  // arrow function will bind Stacks = this (because environemnt is stack)
  push (value) {
    this.data[this.top++] = value;
  }

  pop () {
    return this.data[--this.top];
  }

  peek () {
    return this.data[this.top - 1];
  }

  isEmpty () {
    return this.top == 0 ? true : false;
  }
}

let stack = new Stacks();

stack.push(1);
console.log(stack.peek());
stack.push(2);
console.log(stack.peek());
stack.push(3);
console.log(stack.peek());
stack.push(4);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());
