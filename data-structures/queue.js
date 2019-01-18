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

module.exports = {
  Queue
}