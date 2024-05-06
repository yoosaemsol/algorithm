let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let cnt = 0;

while (n > 0) {
  if (n % 5 === 0) {
    cnt += n / 5;
    n %= 5;
  } else {
    if (n >= 3) {
      n -= 3;
      cnt++;
    } else {
      n = 0;
      cnt = -1;
    }
  }
}

console.log(cnt);
