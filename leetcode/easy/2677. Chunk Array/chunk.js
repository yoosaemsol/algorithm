/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  const numberOfChunk = Math.ceil(arr.length / size);

  const result = [];
  for (let i = 0; i < numberOfChunk; i++) {
    const spliced = arr.splice(0, size);
    result.push(spliced);
  }

  return result;
};
