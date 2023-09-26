let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const currentTime = inputLines[0].split(' ');
let currentHour = Number(currentTime[0]);
let currentMinute = Number(currentTime[1]);

const cookTime = Number(inputLines[1]);

const cookHour = parseInt(cookTime / 60);
const cookMinute = cookTime % 60;

currentMinute += cookMinute;
currentHour += cookHour;

if (currentMinute > 59) {
  currentHour += 1;
  currentMinute -= 60;
}

if (currentHour > 23) {
  currentHour = currentHour - 24;
}

console.log(currentHour, currentMinute);
