let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];

b_1 = b[2];
b_10 = b[1];
b_100 = b[0];

console.log(Number(a) * Number(b_1));
console.log(Number(a) * Number(b_10));
console.log(Number(a) * Number(b_100));
console.log(Number(a) * Number(b));
