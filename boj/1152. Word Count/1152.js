let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

let words = inputLines[0].trim().split(' ');

if (words == '') {
  console.log(0);
} else {
  console.log(words.length);
}
