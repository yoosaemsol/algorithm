let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(inputLines[0]);
const scores = inputLines[1].split(' ').map(Number);

const maxValue = Math.max(...scores);

let updated = 0;

scores.forEach((score) => {
  updated += (score / maxValue) * 100;
});

console.log(updated / n);
