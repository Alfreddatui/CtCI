// function StackDS() {
//   this.data = [];
//   this.top = 0;
// }

// StackDS.prototype.push = function(value) {
//   this.data[this.top++] = value;
// }

// StackDS.prototype.pop = function() {
//   return this.data[--this.top];
// }

// StackDS.prototype.peek = function () {
//   return this.data[this.top - 1];
// }

// StackDS.prototype.isEmpty = function () {
//   return this.top == 0 ? true : false;
// }

class StackDS {
  constructor(arr) {
    this.data = arr ? arr : [];
    this.top = 0;
    this.size = 2;
  }

  // arrow function will bind StackDS = this (because environemnt is stack)
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

  printS () {
    console.log(this.data.slice(0, this.top));
  }
}

StackDS.prototype.isFull = function() {
  return this.data.slice(0, this.top).length == this.size ? true : false;
}

module.exports = {
  StackDS
}