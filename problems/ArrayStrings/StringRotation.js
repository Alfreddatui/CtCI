// String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.
// Given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// example: "waterbottle" and "erbottlewat"

// implement isSubstring using Rabin Karp algorithm
function isSubstring(string, sub) {
  const lnS = string.length;
  const lnSub = sub.length;

  let map = {};
  for (let i = 0; i < lnS - lnSub + 1; i++) {
    if (map[string.slice(i, i + lnSub)] = 1) {
      return true;
    }
    map[string.slice(i, i + lnSub)] = 1;
  }

  return false;
}

function stringRot(s1, s2) {
	const ln1 = s1.length;
	const ln2 = s2.length;

	if (ln1 == ln2 && ln1 > 0) {
		return isSubstring(s1 + s1, s2);
	}
	return false;	
}

const s1 = "waterbottle";
const s2 = "erbottlewat";

console.log(stringRot(s1, s2));
