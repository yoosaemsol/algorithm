let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, sum] = input[0].split(" ").map(Number);

let remainingSum = sum;
let numberOfCoins = 0;

for (let i = n; i >= 1; i--) {
  if (remainingSum === 0) break;
  const num = Math.floor(remainingSum / Number(input[i]));
  numberOfCoins += num;
  remainingSum = remainingSum % input[i];
}

console.log(numberOfCoins);
