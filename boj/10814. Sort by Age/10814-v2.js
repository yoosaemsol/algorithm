let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

arr.sort((a, b) => a[0] - b[0]); // node.js provides stable sorting as a default

let answer = "";
for (let x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);
