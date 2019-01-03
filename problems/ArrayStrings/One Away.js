// One Away: There are three types of edits that cna be perfomed on strings:
//  - insert a character
//  - remove a character
//  - replace a character
//  
// Give a two strings, write a function to check if they are one edit (or zero edits) away.

function oneAway(s1, s2) {
	//
	const ln1 = s1.length;
	const ln2 = s2.length;

	if (ln1 != ln2) {
		if (Math.abs(ln1 - ln2) != 1) {
			return false;
    }
    
    let bigString, lenBig, smallString, lenSm;

		if (ln1 > ln2) {
			bigString = s1;
			lenBig = ln1;
			smallString = s2;
			lenSm = ln2;
		} else {
			bigString = s2;
			lenBig = ln2;
			smallString = s1;
			lenSm = ln1;
		}

		let i = 0, j = 0;

		while (i < lenBig && j < lenSm) {
			if (bigString[i] != smallString[j]) {
				if (i != j) {
					return false;
				}
				i++;
			}
			i++;
			j++;
		}
	} else {
		// ln s1 and s2 is the same
		let foundDiff = false;
		for (let i = 0; i < ln1; i++) {
			if (s1[i] != s2[i]) {
				if (foundDiff) {
					return false;
				}
				foundDiff = true;
			}
		}
  }

  return true;
}

const s1 = "pale";
const s2 = "pales";

console.log(oneAway(s1, s2));