### Bubble Sort

* It simply checks adjacent elements and swaps their positions if they are not in order.

* The name "bubble" sort comes from the resemblance of its form to bubbles when comparing adjacent elements.

* It is one of the inefficient sorting algorithms with a time complexity of O(N^2). 😕

✅ Once a single step is performed, the largest element moves to the very end!

✅ Therefore, in the next step, the data that has moved to the end is excluded from the sorting.

![Pasted Graphic](https://github.com/yoosaemsol/algorithm/assets/75073867/68369a7b-699e-4a5e-a94f-01fa862f23c8)


### Code

```js

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}


const arr = [9,8,2,4,3]; 
bubbleSort(arr);

console.log(arr); // [ 2, 3, 4, 8, 9 ]

```