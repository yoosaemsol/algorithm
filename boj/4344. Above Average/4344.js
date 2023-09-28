let fs = require('fs');
let inputLines = fs.readFileSync('/dev/stdin').toString().split('\n');

const numberOfCases = Number(inputLines[0]);

for (let i = 1; i < numberOfCases + 1; i++) {
  const scores = inputLines[i].split(' ').map(Number);
  const total = scores.shift();

  const sum = scores.reduce((sum, score) => sum + score, 0);
  const average = sum / total;

  let aboveAverageCount = 0;

  scores.forEach((score) => {
    if (score > average) {
      aboveAverageCount++;
    }
  });

  console.log(((aboveAverageCount / total) * 100).toFixed(3), '%');
}
