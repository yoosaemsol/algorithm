let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputLines[0]);
let arr = inputLines[1].split(' ').map(Number);

let minValue = 1000001;
let maxValue = -1000001;

for (let i = 0; i < n; i++) {
  if (minValue > arr[i]) minValue = arr[i];
  if (maxValue < arr[i]) maxValue = arr[i];
}

console.log(minValue, maxValue);
