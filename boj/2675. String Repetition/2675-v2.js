let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputLines[0]);

for (let i = 1; i <= n; i++) {
  const [r, s] = inputLines[i].split(' '); //repeat, string

  let result = '';

  for (let x of s) {
    result += x.repeat(r);
  }

  console.log(result);
}
