let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let flag = false;
let cnt = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }

  if (b % 2 == 0) b = parseInt(b / 2);
  else if (b % 10 == 1) b = parseInt(b / 10);
  else break;
  cnt++;
}

if (flag) console.log(cnt);
else console.log(-1);
