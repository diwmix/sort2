let arr = [43, 634, 4, 123, 12, 56, 85, 12, 13, 135, 6736, 2, 5]

/* видалення парних */

let result = arr.filter(function(elem) {
	return elem % 2 == 0;
});

console.log(result);


/* Сортування  */
function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
      }
    }
    return arr
  }
  console.log((bubbleSort(arr)))






