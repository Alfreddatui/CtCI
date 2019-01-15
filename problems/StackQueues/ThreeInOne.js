// Three In One: Describe how you could use a single array to implement three stacks.

	// thought of process
	// we can achieve this with the sam complexity by dividing the array into 3 and set a pointer to push pop the stacks correspondingly.
	// but the drawback is the stack will have maximum SIZE

	// second approach is to use dynamic size array, but we can move the elements once stack is pushed,
	// for example: initially pointer s1, s2, s3 will point to 0. If you push to s1, s2 dan s3 will move to next index.
	// Assume you push to S3, now s1 and s2 still at 0. And you push s1, move all S3 and S2 element to by 1 and s2 and s3 pointer add 1

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 	// 1st approach
function TripleStack() {
 let size = 120
	this.data = new Array(size); // set max length stack equal to 40
	this.s1 = 0;
	this.s2 = 40;
  this.s3 = 80;
  this.push = push;
  this.peek = peek;
  this.isEmpty = isEmpty;
  this.pop = pop;
  this.printS = printS;
}

function push(s, value) {
	switch(s) {
    case "s1":
      if (this.s1 == 40) {
        return "S1 FULL";
      }
      this.data[this.s1++] = value;
      break;
		case "s2":
      if (this.s2 == 80) {
        return "S2 FULL";
      }
			this.data[this.s2++] = value;
			break;
		case "s3":
      if (this.s3 == 120) {
        return "S3 FULL";
      }
			this.data[this.s3++] = value;
			break;
	}
}

function pop(s) {
	switch(s) {
		case "s1":
      if (this.s1 == 0) {
        return "S1 EMPTY";
      }
			return this.data[--this.s1];
		case "s2":
      if (this.s2 == 40) {
        return "S2 EMPTY";
      }
			return this.data[--this.s2];
		case "s3":
      if (this.s3 == 80) {
        return "S3 EMPTY";
      }
			return this.data[--this.s3];
	}
}

function peek(s) {
	switch(s) {
		case "s1":
			return this.data[this.s1 - 1];
		case "s2":
			return this.data[this.s2 - 1];
		case "s3":
			return this.data[this.s3 - 1];
	}
}

function isEmpty(s) {
	switch(s) {
		case "s1":
      if (this.s1 == 0) return true;
      break;
		case "s2":
      if (this.s2 == 40) return true;
      break;
		case "s3":
      if (this.s3 == 80) return true;
      break;
  }
  return false;
}

function printS() {
  console.log(this.data.slice(0, this.s1));
  console.log(this.data.slice(40, this.s2));
  console.log(this.data.slice(80, this.s3));
}

// first approach lead to push(O(1)), pop(O(1)), peek(O(1)), isEmpty(O(1)) with fixed size of stacks
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // second approach

// function TripleStack() {
// 	this.data = [];
// 	this.s1 = 0;
// 	this.s2 = 0;
//   this.s3 = 0;
//   this.push = push;
//   this.peek = peek;
//   this.isEmpty = isEmpty;
//   this.pop = pop;
//   this.printS = printS;
// }

// function push(s, value) {
// 	switch(s) {
// 		case "s1":
//       this.data.splice(this.s1++, 0, value);
//       this.s2++;
//       this.s3++;
//       break;
//     case "s2":
//       this.data.splice(this.s2++, 0, value);
//       this.s3++;
// 			break;
// 		case "s3":
//       this.data.push(value);
//       this.s3++;
// 			break;
// 	}
// }

// function pop(s) {
// 	switch(s) {
//     case "s1":
//     if (this.s1 == 0) return "Stack Empty";
//     this.s2--;
//     this.s3--;
//     return this.data.splice(--this.s1, 1);
//     case "s2":
//       if (this.s2 == this.s1) return "Stack Empty";
//       this.s3--;
// 			return this.data.splice(--this.s2, 1);
//     case "s3":
//       if (this.s2 == this.s3) return "Stack Empty";
//       this.s3--;
// 			return this.data.pop();
// 	}
// }

// function peek(s) {
// 	switch(s) {
//     case "s1":
//       if (this.s1 == 0) return "Stack empty";
//       return this.data[this.s1 - 1];
//     case "s2":
//       if (this.s2 == this.s1) return "Stack empty";
// 			return this.data[this.s2 - 1];
// 		case "s3":
//       if (this.s3 == this.s2) return "Stack empty";
// 			return this.data[this.s3 - 1];
// 	}
// }

// function isEmpty(s) {
// 	switch(s) {
// 		case "s1":
//       if (this.s1 == 0) return true;
//       break;
// 		case "s2":
//       if (this.s2 == this.s1) return true;
//       break;
// 		case "s3":
//       if (this.s3 == this.s2) return true;
//       break;
//   }
//   return false;
// }

// function printS() {
//   console.log(this.data.slice(0, this.s1));
//   console.log(this.data.slice(this.s1, this.s2));
//   console.log(this.data.slice(this.s2, this.s3));
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let tripleS = new TripleStack();

tripleS.push("s1", 1);
tripleS.push("s1", 2);
tripleS.push("s1", 3);
tripleS.push("s1", 4);
tripleS.push("s2", 5);
tripleS.push("s2", 6);
tripleS.push("s2", 7);
tripleS.push("s2", 8);
tripleS.push("s3", 9);
tripleS.push("s3", 10);
tripleS.push("s3", 11);
tripleS.push("s3", 12);
console.log("PEEK");
console.log(tripleS.peek("s1"));
console.log(tripleS.peek("s2"));
console.log(tripleS.peek("s3"));
tripleS.printS();
console.log("pop");
console.log(tripleS.pop("s1"));
console.log(tripleS.pop("s2"));
console.log(tripleS.pop("s3"));
console.log("PEEK");
console.log(tripleS.peek("s1"));
console.log(tripleS.peek("s2"));
console.log(tripleS.peek("s3"));
tripleS.printS();
console.log(tripleS.isEmpty("s1"));
console.log(tripleS.isEmpty("s2"));
console.log(tripleS.isEmpty("s3"));

// second appraoch, all stacks size are dynamics but the time complexity for push, pop = O(n)

// after reading the solution, they also have a solution like approach 1, but the number of stack become a variable and the this.data is equal to numberOfStack*stackSize.
// a good approach, keep it in mind

// they also have 2nd approach but it is complicated, read at page 229