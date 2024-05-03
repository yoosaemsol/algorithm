let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let points = input[1].split(" ").map(Number);
let uniquePoints = [...new Set(points)];
uniquePoints.sort((a, b) => a - b);

let myMap = new Map();

for (let i = 0; i < uniquePoints.length; i++) {
  myMap.set(uniquePoints[i], i);
}

let answer = "";
for (x of points) answer += myMap.get(x) + " ";

console.log(answer);
