Array.prototype.last = function () {
  return this?.length ? [...this].pop() : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
