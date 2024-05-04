let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let times = input[1].split(" ").map(Number);

times.sort((a, b) => a - b);

let answer = 0;
let summary = 0;

for (let i = 0; i < n; i++) {
  summary += times[i];
  answer += summary;
}

console.log(answer);
