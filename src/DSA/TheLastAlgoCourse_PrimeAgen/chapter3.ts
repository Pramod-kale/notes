//! Bubble sort.

/**
 * The bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
 * The each element should be smaller than the next one, that goes like this.
 * [ xi < xi+1 ]
 */

/**
 * in the first iteration, the largest element will bubble up to the end of the array.
 * that means the last element after every iteration is always largest, so we don't need to compare that last element again.
 * in the next iteration, the comparison will be done till the end but the last the element from the previous iteration won't be compared.
 * and this keeps on going till we have one element left, the last element will always be sorted.
 *
 *$ for whiteboard visualization refer to the image ./images/bubbleSort.png
 *
 * the runtime for the bubbleSort is O(n^2).
 * the explanation goes like this.
 * each time we drop the last element and consider the length of an array as n-1, n-2 ... n-n+1
 * and we divide the equation by 2 so that gives to (n*(n+1))/2
 * we drop the constants in runtime calc, so that will be n*(n+1) => n^2+n => n^2
 *$ for white board reference check the image ./images/bubbleSortRuntime.png
 */

//# An array of single element is always sorted

const unsortedArray = [1, 4, 6, 2, 3, 9, 7, 8, 0, 5];
const bubble_sort = (arr: number[]): void => {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
};

bubble_sort(unsortedArray);
