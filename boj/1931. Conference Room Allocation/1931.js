let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let meeting = [];

for (let i = 1; i <= n; i++) {
  meeting.push(input[i].split(" ").map(Number));
}

meeting.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let ended = meeting[0][1];
let cnt = 1;

for (let i = 1; i < meeting.length; i++) {
  let [start, end] = meeting[i];

  if (start >= ended) {
    ended = end;
    cnt++;
  }
}

console.log(cnt);
