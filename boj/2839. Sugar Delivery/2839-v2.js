let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    cnt += n / 5;
    console.log(cnt);
    flag = true;
    break;
  } else {
    n -= 3;
    cnt++;
  }
}

if (!flag) {
  console.log(-1);
}
