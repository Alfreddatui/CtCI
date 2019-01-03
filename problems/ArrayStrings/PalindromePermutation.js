// Palindrome Permutation: Given a string, write a fucntion to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. teh palindrome does not need to be limited to just dictionary words.

function palindromePerms(s1) {
	// ask for the string whether unicode or ASCII, lower case uppercase different?
	// from the example, the space is not considered, assume ASCII(128 chars)
	const arr = Array(128).fill(0);
	const ln = s1.length;

	for (let i = 0; i < ln; i++) {
		if (s1[i] != " ") {
			arr[s1[i].charCodeAt(0)]++;
		}
	}

	let foundOdd = false
	for (let i = 0; i < 128; i++) {
		if (arr[i]%2 == 1) {
			if (foundOdd) {
				return false;
			}
			foundOdd = true;
    }
	}

  return true;
}

const input = "tact   c oaoi   ";
console.log(palindromePerms(input));
