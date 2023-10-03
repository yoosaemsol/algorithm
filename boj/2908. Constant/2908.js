let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let x = inputLines[0].split(' ')[0];
let y = inputLines[0].split(' ')[1];

let newX = x[2] + x[1] + x[0];
let newY = y[2] + y[1] + y[0];

console.log(Math.max(Number(newX), Number(newY)));
