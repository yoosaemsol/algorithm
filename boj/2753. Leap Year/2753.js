let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let year = Number(inputLines[0]);

if (year % 4 === 0 && year % 100 !== 0) console.log(1);
else if (year % 4 === 0 && year % 400 === 0) console.log(1);
else console.log(0);
