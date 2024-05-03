let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

const obj = {};

arr.forEach((user) => {
  if (obj[user[0]]) {
    obj[user[0]].push(user[1]);
  } else {
    obj[user[0]] = [user[1]];
  }
});

const order = Object.keys(obj).sort((a, b) => a - b);

let answer = "";

for (let i = 0; i < order.length; i++) {
  obj[order[i]].forEach((name) => {
    answer += order[i] + " " + name + "\n";
  });
}

console.log(answer);
