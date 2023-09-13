// solve with obejct

var TimeLimitedCache = function () {
  this.store = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const timer = setTimeout(() => {
    delete this.store[key];
  }, duration);

  const hasKey = this.store?.[key];

  if (hasKey) {
    clearTimeout(this.store[key][1]);
  }

  this.store[key] = [value, timer];

  return !!hasKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.store[key]?.[0] ?? -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.store).length;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
