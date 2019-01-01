// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

function checkPermutation(s1, s2) {
  const ln1 = s1.length;
  const ln2 = s2.length;

  if (ln1 != ln2) {
    return false;
  }

  let arr = Array(128).fill(0);
  
  for (let i = 0; i < ln1; i++) {
    arr[s1[i].charCodeAt(0)]++;
  }

  for (let i = 0; i < ln2; i++) {
    if (arr[s2[i].charCodeAt(0)] == 0) {
      return false;
    }

    arr[s2[i].charCodeAt(0)]--;
  }

  for (let i = 0; i < 128; i++) {
    if (arr[i] != 0) {
      return false;
    }
  }

  return true;
}

const input1 = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./asdfghjkl;'";
const input2 = "/.,mnbvcxz';lkjhgfdsa\\][poiuytrewq=-0987654321`';lkjhgfdsas";

console.log(checkPermutation(input1, input2));
