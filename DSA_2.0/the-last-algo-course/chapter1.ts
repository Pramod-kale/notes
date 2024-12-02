/**
 * Big O 
 * it is the way to categorize algo time or memory req based on inputs,
 * It is not meant to be an exact measurement, it will not tell you how many CPU cycles it takes, instead it is meant to generalize the growth of your algo.
 */


/**
 * imp concepts
 * 1) growth of an algo respect to input. 
 * 2) Constants are dropped.
 * 3) Worst case is usually the way it is measured.
 */

/**
 * common Big O notations
 * 1) O(1) - constant time => no matter the input size, the algo will always take the same amount of time to run,
 * 2) o(log n) - logarithmic time => the algo will take longer as the input size grows, but not as much as linear time
 * 3) O(n) linear time => the algo will take longer as the input size grows, but not as much as quadratic time
 * 4) O(n log n) linearithmic time => the algo will take longer as the input size grows, but not as much as cubic time
 * 5) O(n^2) quadratic time => even worse than linear time,
 * 6) O(2^n) exponential time
 * 7) O(n!) factorial time 
 */

//! some examples
// O(N^2)

// function sumCharCodes(n: string): number {
//     let sum = 0;
//     for (let i = 0; i < n.length; ++i){
//         for (let j = 0; j < n.length; j++) {
//             sum += sumCharCodes;
//         }
//     }
//     return sum;
// }


// O(N^3)
// do the same thing like 3 loops one inside another.

// O(n log n) => quicksort
// O(log n) => Binary search
// O(sqrt(n))  

/**
 * Linear search
 * so the linear search is a simple algo that iterates through an array and compares the element to find what is wanted.
 * so considering the 3 rules we can say that this goes as O(n) as worst case scenario.
 * for example we have [].indexOf("item") in javascript which does the same thing.
 */

const linearSearch = () => {
    for (let index = 0; index < [].length; index++) {
        return [][index] === "item we are looking for";
    }
}


/**
 * so for the algorithms which will divide the array and search (binary search).
 * the big(O) is log n as the algo proceeds it breaks the array and starts searching in it.
 * so whenever any algo which starts breaking the array it has to be either log n or n log n.
 * 
 * for the binary search, the algo breaks the array into two parts and check the middle element and compares it.
 * the array has to be sorted to use this algo. if the element is bigger or lesser than the required element. based on that it then chooses
 * the splitted part and proceeds to do the same thing over and over till it finds or no element remains.
 */

//@ pseudo code for binary search
/**
 * func search(array, target){
 *                                                          [low,,,,,,,,,, high] elements
 * midpoint = floor( low +(high - low) / 2)
 * 
 * 
 * }
 */

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let target = 11;

const binarySearch = (array: number[], target: number) => {
    let low = 0;
    let high = array.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);
        const val = array[mid]
        if (val === target) {
            return val;
        } else if (target < val) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high);

    return false
}

console.log("binary search", binarySearch(sortedArray, target))