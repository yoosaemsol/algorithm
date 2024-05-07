let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let max = Number(input[0]);
let cnt = 1;
let result = 1;

while (max > 0) {
  if (max - cnt > 0) {
    max -= cnt;
    result++;
    cnt++;
  } else if (max - cnt < 0) {
    console.log(result - 1);
    break;
  } else {
    console.log(result);
    break;
  }
}
