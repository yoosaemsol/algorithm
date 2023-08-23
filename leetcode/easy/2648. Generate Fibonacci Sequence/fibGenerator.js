/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;

    let temp = [current, next];
    current = temp[1];
    next = temp[0] + temp[1];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
