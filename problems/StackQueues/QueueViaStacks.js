// QueueViaStacks: Implement a MyQueue class which implements a queue using 2 stacks

let { StackDS } = require("../../data-structures/stack");

function MyQueue() {
  // thought of process
  // I did this problem before, so we can solve with:
  // assume 2 stacks are s1 and s2
  // everytime we enqueue, we just keep pushing value to s1
  // and whenever we want to dequeue, we first check whether s2 is empty?
  // if yes, we pop s1 until s1 is empty and all the values is pushed to s2.
  // after that we just pop s2 once, and that is the value
  // if s2 is not empty, directly pop s2 because the order still holds! (all s2 element will always by order, infront of all element in s1)

  this.s1 = new StackDS();
  this.s2 = new StackDS();
}

MyQueue.prototype.enqueue = function (value) {
  this.s1.push(value);
}

MyQueue.prototype.dequeue = function () {
  if (this.s2.isEmpty()) {
    while(!this.s1.isEmpty()) {
      let temp = this.s1.pop();
      this.s2.push(temp);
    }
  }
  return this.s2.pop();
}

MyQueue.prototype.printQ = function() {
  let result = this.s2.printS().reverse().concat(this.s1.printS())
  console.log("THE REAL Q");
  return result;
}

let Q = new MyQueue();

Q.enqueue(0);
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);
Q.enqueue(5);
console.log(Q.dequeue());
console.log(Q.printQ());
Q.enqueue(5);
Q.enqueue(6);
Q.enqueue(7);
console.log(Q.printQ());
console.log(Q.dequeue());
console.log(Q.printQ());
