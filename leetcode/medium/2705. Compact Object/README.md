## [2705. Compact Object](https://leetcode.com/problems/compact-object/)

Given an object or array `obj`, return a **compact object**. A **compact object** is the same as the original object, except with keys containing **falsy** values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered **falsy** when `Boolean(value)` returns `false`.

You may assume the `obj` is the output of `JSON.parse`. In other words, it is valid JSON.

<br/>

**Example 1:**

**Input:**

```js
obj = [null, 0, false, 1];
```

**Output:**

```js
[1];
```

**Explanation:**

```
All falsy values have been removed from the array.
```

<br/>

**Example 2:**

**Input:**

```js
obj = { a: null, b: [false, 1] };
```

**Output:**

```js
{"b": [1]}
```

**Explanation:**

```js
obj["a"] and obj["b"][0] had falsy values and were removed.
```

<br/>

**Example 3:**

**Input:**

```js
obj = [null, 0, 5, [0], [false, 16]];
```

**Output:**

```js
[5, [], [16]];
```

**Explanation:**

```js
obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
```

<br/>

**Constraints:**

- `obj` is a valid JSON object
- `2 <= JSON.stringify(obj).length <= 106`
