// Animal Shelter: An animal shelter which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create hte data structures to maintain this system
// and implement operations suchs as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built in LinkedList data Structure

const { Node } = require("../../data-structures/linked-list");

function AnimalShelterQ() {
  // thought of process
  // we are using linked list because we want a feature that we can cut in the middle and put it back again as a queue(dequeueDog and dequeueCat need this)
  // and to achieve this, we need to create a method to enqueue to our queue and assume that the result queue will be ordered according to the date (make sense).

  // for dequeueAny, we will do a normal dequeue, just move head once O(1)
  // for dequeueDog or dequeueCat, we need to find the next dog or cat and drop it from there respectively (still maintain the queue)
  this.head = null;
  this.tail = null; // add pointer to tail to make 
}

AnimalShelterQ.prototype.enqueue = function (node) {
  if (this.head == null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
}

AnimalShelterQ.prototype.dequeue = function () {
  if (this.head == null) {
    return null;
  }
  let tmp = this.head;
  this.head = this.head.next;
  if (this.tail == tmp) {
    this.tail = null;
  }
  
  return tmp;
}

AnimalShelterQ.prototype.dequeueCat = function () {
  if (this.head == null) {
    return null;
  }

  let node = this.head;
  let prev = null;
  while(node != null && node.value != "Cat") {
    prev = node;
    node = node.next;
  }

  if (node == null) {
    console.log("Cat does not exist");
    return;
  }

  if (prev == null) {
    this.dequeue();
    return node;
  }

  prev.next = node.next;
  return node;
}

AnimalShelterQ.prototype.dequeueDog = function () {
  if (this.head == null) {
    return null;
  }

  let node = this.head;
  let prev = null;
  while(node != null && node.value != "Dog") {
    prev = node;
    node = node.next;
  }

  if (node == null) {
    console.log("Dog does not exist");
    return;
  }

  if (prev == null) {
    this.dequeue();
    return node;
  }

  prev.next = node.next;
  return node;
}

AnimalShelterQ.prototype.printQ = function () {
  let result = "";
  let node = this.head;
  while(node != null) {
    result += node.value + " -> ";
    node = node.next;
  }

  console.log(result.slice(0, -4));
}

let AnimalQ = new AnimalShelterQ();

AnimalQ.enqueue(new Node("Cat"));
AnimalQ.enqueue(new Node("Cat"));
AnimalQ.enqueue(new Node("Cat"));
AnimalQ.enqueue(new Node("Dog"));
AnimalQ.enqueue(new Node("Cat"));
AnimalQ.enqueue(new Node("Dog"));
AnimalQ.enqueue(new Node("Cat"));
AnimalQ.enqueue(new Node("Dog"));
AnimalQ.enqueue(new Node("Dog"));
AnimalQ.printQ();
AnimalQ.dequeueDog();
AnimalQ.printQ();
AnimalQ.dequeueCat();
AnimalQ.printQ();

// with this appraoch, the enqueue, dequeue time complexity are O(1) while dequeueCat and dequeueDog are O(n).
// for the space complexity, all of them are O(1)