/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openSymbol = ['(', '{', '['];
  const closeSymbol = [')', '}', ']'];

  const stack = [];
  let result = true;

  for (let i = 0; i < s.length; i++) {
    if (openSymbol.includes(s[i])) {
      stack.push(openSymbol.indexOf(s[i]));
    }

    if (closeSymbol.includes(s[i])) {
      if (stack[stack.length - 1] !== closeSymbol.indexOf(s[i])) {
        result = false;
        break;
      }
      if (stack[stack.length - 1] === closeSymbol.indexOf(s[i])) {
        stack.pop();
        continue;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return result;
};
