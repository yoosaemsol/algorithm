let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputLines[0]);

for (let i = 1; i < n + 1; i++) {
  const data = inputLines[i].split(' ');
  const times = Number(data[0]);
  const text = data[1];
  let answer = '';

  for (let x of text) {
    for (let j = 0; j < times; j++) {
      answer += x;
    }
  }

  console.log(answer);
}
