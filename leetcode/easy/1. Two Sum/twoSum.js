/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const indexOfDiff = nums.lastIndexOf(diff);

    if (indexOfDiff > 0 && i !== indexOfDiff) {
      result = [i, indexOfDiff];
      break;
    }
  }

  return result;
};
