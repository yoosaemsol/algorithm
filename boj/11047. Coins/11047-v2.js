let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let cnt = 0;

for (let i = n; i >= 1; i--) {
  if (k === 0) break;
  if (k < Number(input[i])) continue;

  cnt += parseInt(k / Number(input[i]));
  k %= Number(input[i]);
}

console.log(cnt);
