let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = inputLines[0].split(' ').map(Number);
let prize;

if (a === b && a === c) {
  prize = 10000 + a * 1000;
} else if (a !== b && a !== c && b !== c) {
  const highest = [a, b, c].sort((a, b) => b - a)[0];
  prize = highest * 100;
} else {
  if (a === b) {
    prize = 1000 + a * 100;
  } else {
    prize = 1000 + c * 100;
  }
}

console.log(prize);
