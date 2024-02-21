### Insertion Sort

* Insertion sort is a sorting technique that inserts each number into its appropriate position.

* It is faster in sorting speed than selection sort and bubble sort. 🎢


### Insertion Sort Operation:

1. At each step, find the position where the current element will be inserted.
2. Continuously move to the left until reaching the appropriate position.

<img width="765" alt="image" src="https://github.com/yoosaemsol/algorithm/assets/75073867/a3fcecb0-8e96-4f91-8672-9418e23e3960">


### Code

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
    // Repeat while decrementing from index j to 1

      if(arr[j] < arr[j-1]) {
        // Move one step to the left each time
        // Swap
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      } else {
        // Stop when encountering data smaller than itself
        break;
      }
    }
  }
}


const arr = [2,4,3,1,9,6,8,7,5]; 
insertionSort(arr);

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```