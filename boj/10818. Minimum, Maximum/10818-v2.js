let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = inputLines[1].split(' ').map(Number);

let minValue = arr.reduce((a, b) => Math.min(a, b));
let maxValue = arr.reduce((a, b) => Math.max(a, b));

console.log(minValue, maxValue);
