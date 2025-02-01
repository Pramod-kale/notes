const unsortArr = [64, 25, 12, 22, 11];

function SelectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(
  SelectionSort(unsortArr)
);

export default SelectionSort;
