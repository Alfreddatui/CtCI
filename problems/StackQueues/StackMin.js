// // Stack Min: How would you design a stack which, in addition to push and pop, has a function min, which returns the miimum element? Push pop and min should all operate in O(1) time

// function Stack() {
// 	// thought of process
// 	// already know the solutions, we can keep track the minimum by keep adding the minimum current value each time we push a new value.
// 	// remember that this solution will lead to O(1) for push pop, but addition space O(n)

// 	// second approach is to add attribute min, a number value and every time we pop or push, we calculate the new minimum value, this solutions is O(1) space but pop became O(n) time complexity
// 	this.data = [];
// 	this.min = [];
// }

// Stack.prototype.push = function(value) {
// 	this.data.push(value);
// 	if (this.min.length == 0) {
// 		this.min.push(value);
// 	} else {
// 		if (this.min[this.min.length - 1] < value) {
// 			this.min.push(this.min[this.min.length - 1]);
// 		} else {
// 			this.min.push(value);
// 		}
// 	}
// }

// Stack.prototype.pop = function() {
// 	if (this.min.length == 0) {
// 		return "Stack is empty";
// 	} else {
// 		this.min.pop();
// 		this.data.pop();
// 	}
// }

// Stack.prototype.minValue = function() {
//   if (this.min.length == 0) {
//     return "Stack is empty";
//   }
// 	return this.min[this.min.length - 1];
// }




// After reading solutions, instead of using array, the solution use a stack and keep using method peek and it will push when the value is smaller or equal

// answer

var { StackDS } = require("../../data-structures/stack");

function Stack() {
	// thought of process
	// already know the solutions, we can keep track the minimum by keep adding the minimum current value each time we push a new value.
	// remember that this solution will lead to O(1) for push pop, but addition space O(n)

	// second approach is to add attribute min, a number value and every time we pop or push, we calculate the new minimum value, this solutions is O(1) space but pop became O(n) time complexity
	this.data = [];
	this.min = new StackDS();
}

Stack.prototype.push = function(value) {
	this.data.push(value);
	if (this.min.isEmpty()) {
		this.min.push(value);
	} else {
		if (this.min.peek() >= value) {
			this.min.push(value);
		}
	}
}

Stack.prototype.pop = function() {
	if (this.min.isEmpty()) {
		return "Stack is empty";
	} else {
    let value = this.data.pop();
    if (value == this.min.peek()) {
      this.min.pop();
    }
	}
}

Stack.prototype.minValue = function() {
  if (this.min.isEmpty()) {
    return "Stack is empty";
  }
	return this.min.peek();
}



let stack = new Stack();
console.log(stack.pop());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(-30);
stack.push(4);
stack.push(4);
stack.push(4);
console.log(stack.minValue());
console.log(stack);

// with this, the complexity is the same, but it is optimized