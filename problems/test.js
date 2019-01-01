function sortString(s) {
  let arr = s.split("")
  arr.sort();
  return arr.join("");
}

console.log(sortString("asdAcqza"));