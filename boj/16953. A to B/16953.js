let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let cnt = 0;
let num = b;

while (a !== num) {
  if (num < a) break;

  if (num.toString().slice(-1) == 1) {
    num = Number(num.toString().slice(0, -1));
    cnt++;
  } else {
    num /= 2;
    cnt++;
  }
}

if (a === num) console.log(cnt + 1);
if (a > num) console.log(-1);
