let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = input[0];
let arr = num.split("");

arr.sort((a, b) => Number(b) - Number(a));
console.log(arr.join(""));
