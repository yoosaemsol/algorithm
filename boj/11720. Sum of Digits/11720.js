let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = 0;

for (let x of inputLines[1]) {
  result += Number(x);
}

console.log(result);
