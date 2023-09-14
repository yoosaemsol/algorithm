## [2649. Nested Array Generator](https://leetcode.com/problems/nested-array-generator/)

Given a **multi-dimensional array** of integers, return a generator object which yields integers in the same order as **inorder traversal**.

A **multi-dimensional array** is a recursive data structure that contains both integers and other **multi-dimensional arrays**.

**inorder traversal** iterates over each array from left to right, yielding any integers it encounters or applying **inorder traversal** to any arrays it encounters.

**Example 1:**

**Input:**

```js
arr = [[[6]], [1, 3], []];
```

**Output:**

```js
[6, 1, 3];
```

**Explanation:**

```js
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
```

<br/>

**Example 2:**

**Input:**

```js
arr = [];
```

**Output:**

```js
[];
```

**Explanation:**

```
There are no integers so the generator doesn't yield anything.
```

<br/><br/>

**Constraints:**

- `0 <= arr.flat().length <= 105`
- `0 <= arr.flat()[i] <= 105`
- `maxNestingDepth <= 105`

**Can you solve this without creating a new flattened version of the array?**
