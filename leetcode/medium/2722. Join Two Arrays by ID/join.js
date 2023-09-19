/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  arr1.forEach((obj) => {
    result[obj.id] = obj;
  });
  arr2.forEach((obj) => {
    if (result[obj.id]) {
      Object.keys(obj).forEach((key) => {
        result[obj.id][key] = obj[key];
      });
    } else {
      result[obj.id] = obj;
    }
  });

  return Object.values(result);
};
