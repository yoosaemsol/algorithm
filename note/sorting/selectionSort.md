### Selection Sort

* Selection sort is a sorting technique that selects the smallest element and moves it to the front.

* It requires approximately N operations to select the smallest element at each step. (Linear search)

* Consequently, it has a worst-case time complexity of O(N^2) due to going through approximately N steps.

```js

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      
      for (let j = i + 1; j < arr.length; j++) {
        if(arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
}


const arr = [2,4,3,1,9,6,8,7,5]; 
selectionSort(arr);

console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

```