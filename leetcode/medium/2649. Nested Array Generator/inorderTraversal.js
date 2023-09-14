/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  const stack = [...arr];
  const result = [];

  while (stack.length > 0) {
    const value = stack.pop();
    if (Array.isArray(value)) {
      value.forEach((item) => stack.push(item));
    } else {
      result.push(value);
    }
  }

  while (result.length > 0) {
    yield result.pop();
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
