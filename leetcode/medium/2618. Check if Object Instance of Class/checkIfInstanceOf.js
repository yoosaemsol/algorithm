/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj != null && typeof classFunction === 'function') {
    return Object(obj) instanceof classFunction;
  }

  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
