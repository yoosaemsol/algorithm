let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputTime = inputLines[0].split(' ');
let hour = Number(inputTime[0]);
let min = Number(inputTime[1]);

if (min < 45) {
  hour -= 1;
  min += 15;
  if (hour < 0) hour = 23;
} else min -= 45;

console.log(hour + ' ' + min);
