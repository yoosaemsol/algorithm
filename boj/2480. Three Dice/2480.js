let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = inputLines[0].split(' ').map(Number);

if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else if (a !== b && a !== c && b !== c) {
  console.log(Math.max(a, b, c) * 100);
} else {
  if (a === b) {
    console.log(1000 + a * 100);
  } else {
    console.log(1000 + c * 100);
  }
}
