let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let length = Number(inputLines[0]);
let numbers = inputLines[1].split(' ').map(Number);

numbers = numbers.sort((a, b) => a - b);

console.log(numbers[0], numbers[length - 1]);
