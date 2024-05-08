let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let price = input[2].split(" ").map(Number);

let costs = BigInt(0);
let min = price[0];

for (let i = 0; i < n - 1; i++) {
  if (price[i] < min) {
    min = BigInt(price[i]);
  }

  costs += BigInt(dist[i]) * BigInt(min);
}

console.log(String(costs));
