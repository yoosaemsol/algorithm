let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = inputLines.map(Number);
let result = [0, 0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > result[0]) result = [arr[i], i + 1];
}

console.log(result[0]);
console.log(result[1]);
