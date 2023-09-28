let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(inputLines[0]);
const scores = inputLines[1].split(' ').map(Number);

const maxValue = scores.reduce((a, b) => Math.max(a, b));

let updated = [];

for (let i = 0; i < n; i++) {
  updated.push((scores[i] / maxValue) * 100);
}

console.log(updated.reduce((a, b) => a + b) / n);
