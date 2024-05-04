let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = input[0];
const cnt = Array(10).fill(0);

for (let digit of n) {
  cnt[digit]++;
}

let answer = "";

for (let i = 9; i >= 0; i--) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + "";
  }
}

console.log(answer);
