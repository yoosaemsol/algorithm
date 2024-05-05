let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const groups = input[0].split("-");

let sum = 0;
groups.forEach((nums, idx) => {
  const subSum = nums
    .split("+")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  if (idx === 0) sum += subSum;
  else sum -= subSum;
});

console.log(sum);
