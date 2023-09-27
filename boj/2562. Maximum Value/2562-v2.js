let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let maxIndex = 0;
let maxValue = 0;

for (let i = 0; i < 9; i++) {
  let data = Number(inputLines[i]);
  if (maxValue < data) {
    maxValue = data;
    maxIndex = i;
  }
}

console.log(maxValue);
console.log(maxIndex + 1);
