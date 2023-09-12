/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  const result = new Array(rowsCount)
    .fill()
    .map(() => new Array(colsCount).fill(0));

  let revOrder = false;
  let index = 0;

  for (let j = 0; j < colsCount; ++j) {
    if (!revOrder) {
      for (let i = 0; i < rowsCount; ++i) {
        result[i][j] = this[index++];
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; --i) {
        result[i][j] = this[index++];
      }
    }

    revOrder = !revOrder;
  }

  return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
