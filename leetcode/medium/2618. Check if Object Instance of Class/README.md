## [2618. Check if Object Instance of Class](https://leetcode.com/problems/check-if-object-instance-of-class/)

Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be `undefined`.

<br/>

**Example 1:**

**Input:**

```js
func = () => checkIfInstanceOf(new Date(), Date);
```

**Output:**

```js
true;
```

**Explanation:**

```
The object returned by the Date constructor is, by definition, an instance of Date.
```

<br/>

**Example 2:**

**Input:**

```js
func = () => {
  class Animal {}
  class Dog extends Animal {}
  return checkIfInstanceOf(new Dog(), Animal);
};
```

**Output:**

```js
true;
```

**Explanation:**

```js
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
```

<br/>

**Example 3:**

**Input:**

```js
func = () => checkIfInstanceOf(Date, Date);
```

**Output:**

```js
false;
```

**Explanation:**

```
A date constructor cannot logically be an instance of itself.
```

<br/>

**Example 4:**

**Input:**

```js
func = () => checkIfInstanceOf(5, Number);
```

**Output:**

```js
true;
```

**Explanation:**

```
5 is a Number. Note that the "instanceof" keyword would return false.
However, it is still considered an instance of Number
because it accesses the Number methods. For example "toFixed()".
```
