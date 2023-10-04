let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(inputLines[0]);
let count = 0;

for (let i = 1; i <= n; i++) {
  const wordArr = inputLines[i].split('');
  const stack = [];

  for (let j = 0; j < wordArr.length; j++) {
    const word = wordArr[j];
    if (!stack.includes(word)) {
      stack.push(word);
    } else if (stack[stack.length - 1] === word) {
      stack.push(word);
    } else {
      break;
    }
  }

  if (stack.length === wordArr.length) {
    count += 1;
  }
}

console.log(count);
