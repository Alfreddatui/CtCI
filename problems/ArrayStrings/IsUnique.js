// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// First of all try to ask, what kind of strings? ASCII (7 bits means 128 chars) or Unicode? What about lowercase and uppercase? E
// Remember the step though, dont rush to the answer. Instead, state the brute and optimize from that.
function isUnique(string) {
  // assume ASCII 128 chars
  const ln = string.length;
  if (ln > 128) {
    return false;
  }
  let charArr = Array(128).fill(false);

  for (var i = 0; i < ln; i++) {
    if (charArr[string[i].charCodeAt(0)]) {
      return false;
    }
    charArr[string[i].charCodeAt(0)] = true;
  }

  return true;
}

const input = "`1234567890-=qwertyuiop[]\asdfghjkl;'zxcvbnm,./";
console.log(isUnique(input));