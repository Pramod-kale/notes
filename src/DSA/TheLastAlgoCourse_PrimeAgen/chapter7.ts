//! Quick sort

/**
 * Quick sort works in a way that it divides and it conquers.
 * This gets the sorting done on a basis of something called as PIVOT.
 * a pivot is an elm selected and taken as reference.
 * when we have a pivot all the elm are compared to it and if they are smaller than the pivot their positions are placed to the left of the pivot.
 * and at the last the pivot place will be swapped with the last replaced element's place +1.
 * so the left hand side the pivot is less than pivot and right hand side is always greater.
 * the whole process just repeats on the left hand side of the pivot, again taking some index as pivot and comparing swapping.
 * when the operation on left hand side of the pivot is done. the same process repeats on the right hand side too.
 * when all the operation is done we will be having a sorted array.
 *
 * on the best case we will have a O(n log n)
 * on the worst case we will have O(n^2)
 * refer ./images/quicksort.png
 */


const arr = [9, 3, 7, 4, 69, 420, 42];

const qs = (arr: number[], lo: number, hi: number): void => {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
};

const partition = (arr: number[], lo: number, hi: number): number => {
    const pivot = arr[hi];
    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
};

const quickSort = (array: number[]): void => {
    return qs(array, 0, array.length - 1);
};

quickSort(arr);