let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputLines[0]);
let result = 0;
for (let i = 0; i < n; i++) {
  result += Number(inputLines[1][i]);
}

console.log(result);
