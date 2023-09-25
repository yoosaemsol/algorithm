const fs = require('fs');
const inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const inputTime = inputLines[0].split(' ');
const hour = Number(inputTime[0]);
const min = Number(inputTime[1]);

const totalMinutes = hour * 60 + min;
const adjustedTime = totalMinutes - 45;

if (totalMinutes < 45) {
  console.log(23, 60 - 45 + min);
} else {
  console.log(parseInt(adjustedTime / 60), adjustedTime % 60);
}
