// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this opration in place)
// I am using array and push it because push method complexity is O(1) -> amortized, if I use concat or string method, it will copy the prev string which increase the complexity because js did not have string builder
// Javascript string is immutable
function URLify(s, ln) {
  const arr = [];
  for (let i = 0; i < ln; i++) {
    if (s[i] == " ") {
      arr.push("%20");
    } else {
      arr.push(s[i]);
    }
  }

  return arr.join("");
}

const input = "asd asd asd ";
const ln = 11;
console.log(URLify(input, ln));
