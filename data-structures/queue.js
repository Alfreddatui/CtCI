function Queue() {
  // list of methods: dequeue, enqueue, peek, isEmpty, printQ
  this.data = [];
};

Queue.prototype.enqueue = function(value) {
  this.data.push(value);
}

Queue.prototype.dequeue = function() {
  return this.isEmpty() ? "Underflow" : this.data.shift();
}

Queue.prototype.peek = function() {
  return this.data[0];
}

Queue.prototype.isEmpty = function() {
  return this.data.length == 0 ? true : false;
}

Queue.prototype.printQ = function() {
  console.log(this.data);
}

let Q = new Queue();

Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);
Q.enqueue(5);
Q.dequeue();
Q.enqueue(6);
console.log(Q.isEmpty());
Q.printQ();