let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const score = Number(input[0]);

function check(a) {
  if (90 <= a) console.log('A');
  else if (80 <= a) console.log('B');
  else if (70 <= a) console.log('C');
  else if (60 <= a) console.log('D');
  else console.log('F');
}

check(score);
