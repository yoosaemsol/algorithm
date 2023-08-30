var isPalindrome = function (x) {
  if (x < 0) return false;

  const strX = x.toString();

  const halfLength = strX.length / 2;

  const nums1 = strX.slice(0, halfLength);
  const nums2 = strX.split('').reverse().join('').slice(0, halfLength);

  return nums1 === nums2 ? true : false;
};
