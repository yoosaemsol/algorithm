/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const result = Array(functions.length).fill();
    let reason = '';

    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          result[i] = val;

          if (!result.includes(undefined)) {
            resolve(result);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
