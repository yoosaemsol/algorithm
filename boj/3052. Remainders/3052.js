let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const remainderSet = new Set();

for (let i = 0; i < 10; i++) {
  remainderSet.add(Number(inputLines[i]) % 42);
}

console.log(remainderSet.size);
