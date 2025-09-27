/**
 * Bubble sort.
 * compares each pair of adjacent items and swaps them if they are in the wrong order.
 * The pass through the list is repeated until the list is sorted.
 *
 * Example:
 * Consider the list [4, 2, 7, 1].
 *
 * First pass:
 * Compare 4 and 2, swap to get [2, 4, 7, 1]
 * Compare 4 and 7, no swap
 * Compare 7 and 1, swap to get [2, 4, 1, 7]
 *
 * Second pass:
 * Compare 2 and 4, no swap
 * Compare 4 and 1, swap to get [2, 1, 4, 7]
 *
 * Third pass:
 * Compare 2 and 1, swap to get [1, 2, 4, 7]
 *
 * Fourth pass:
 * List is already sorted, no swaps needed
 * Final sorted list: [1, 2, 4, 7].
 */
(() => {
    const BubbleSort = (arr: number[]): number[] => {
        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr.length - i - 1; ++j) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }

        return arr;
    };

    // Test the BubbleSort function
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log('Bubble Sort :', arr);
    console.log('Sorted array:', BubbleSort([...arr]));
    console.log('-------------------------------');
})();


/**
 * Selection sort.
 * divides the input list into two parts; a sorted sublist of items which is built up from left to right at the front (left) of the list
 * and a sublist of the remaining unsorted items that occupy the rest of the list.
 * Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.
 * The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist,
 * exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
 * and moving the sublist boundaries one element to the right.
 *
 * Example:
 * Consider the list [4, 2, 7, 1].

 * First pass:
 * Find the minimum element in [4, 2, 7, 1], which is 1
 * Swap 1 with 4 to get [1, 2, 7, 4]

 * Second pass:
 * Find the minimum element in [2, 7, 4], which is 2
 * Swap 2 with 2 to get [1, 2, 7, 4] (no change)

 * Third pass:
 * Find the minimum element in [7, 4], which is 4
 * Swap 4 with 7 to get [1, 2, 4, 7]

 * Fourth pass:
 * The last element 7 is already in place, no need to swap
 * Final sorted list: [1, 2, 4, 7].
 */

(() => {

    const selectionSort = (arr: number[]): number[] => {
        for (let i = 0; i < arr.length; ++i) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; ++j) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
    };
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log('Selection sort:', arr);
    console.log('Sorted array:', selectionSort([...arr]));
    console.log('-------------------------------');
})();

/**
 * Insertion sort.
 * builds the final sorted array one item at a time.
 * It takes each element from the input and compares with element in index before it, and swaps it until it is in the correct position.
 *
 * Example:
 * Consider the list [4, 2, 7, 1].

 * First pass:
 * Find the minimum element in [4, 2, 7, 1], which is 1
 * Swap 1 with 4 to get [1, 2, 7, 4]

 * Second pass:
 * Find the minimum element in [2, 7, 4], which is 2
 * Swap 2 with 2 to get [1, 2, 7, 4] (no change)

 * Third pass:
 * Find the minimum element in [7, 4], which is 4
 * Swap 4 with 7 to get [1, 2, 4, 7]

 * Fourth pass:
 * The last element 7 is already in place, no need to swap

 * Final sorted list: [1, 2, 4, 7].
 */

(() => {

    const insertionSort = (arr: number[]): number[] => {
        for (let i = 1; i < arr.length; ++i) {
            let key = arr[i];
            let j = i - 1;

            if (arr[j] > key) {
                [arr[i + 1], arr[j]] = [arr[j], arr[i + 1]];
                j--;
            }
            arr[j + 1] = key;
        }

        return arr;
    };
    const arr = [64, 34, 25, 12, 22, 11, 90];
    console.log('insertion sort:', arr);
    console.log('Sorted array:', insertionSort([...arr]));
    console.log('-------------------------------');

})();