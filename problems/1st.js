// Find all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3
const n = 100;
let map = {};

for (let c = 1; c <= n; c++) {
  for (let d = c; d <= n; d++) {
    let result = c*c*c + d*d*d;
    if (map[result]) {
      map[result].push([c, d]);
    } else {
      map[result] = [[c, d]];
    }
  }
}

for (let key in map) {
  if (map[key].length > 1){
    console.log(key, map[key]);
  }
}
