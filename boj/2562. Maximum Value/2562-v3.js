let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = inputLines.map(Number);
let max = Math.max(...data);

console.log(max);
console.log(data.indexOf(max) + 1);
