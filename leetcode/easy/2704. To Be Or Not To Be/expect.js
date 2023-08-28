/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const reference = val;

  return {
    toBe(val) {
      if (reference === val) {
        return true;
      }

      throw Error('Not Equal');
    },
    notToBe(val) {
      if (reference !== val) {
        return true;
      }

      throw Error('Equal');
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
