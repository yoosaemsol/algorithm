/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  let skip = false;

  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const current = roman[s[i]];
    const next = roman[s[i + 1]];

    if (skip) {
      skip = false;
      continue;
    }

    if (current > next) {
      result += current;
    } else if (current < next) {
      result = result + (next - current);
      skip = true;
    } else {
      result += current;
    }
  }

  return result;
};
