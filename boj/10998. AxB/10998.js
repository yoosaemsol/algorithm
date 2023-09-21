let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');

const A = line[0];
const B = line[1];

console.log(A * B);
