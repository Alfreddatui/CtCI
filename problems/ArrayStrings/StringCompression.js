// String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the compressed string would not become smaller than the original string, your method should return the original string.
// You can assume the strings has only uppercase and lowercase letters (a-z).

function stringCompress(s) {
	const ln = s.length;
	let strArr = [];

	let curChar = s[0];
	let count = 1;
	for (let j = 1; j < ln; j++) {
    if (strArr.length * 2 > ln) {
      return s;
    }

		if (s[j] != curChar) {
			strArr.push(curChar + count);
			curChar = s[j];
			count = 1;
		} else {
			count++;
		}
  }
  strArr.push(curChar + count);

	return strArr.join("");
}

const input = "aaabbcccc";
console.log(stringCompress(input));
