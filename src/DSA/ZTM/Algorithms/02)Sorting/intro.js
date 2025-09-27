// checkout the link for visual representation of sorting algorithms //# https://www.toptal.com/developers/sorting-algorithms


//! what is up with inbuild sort method which we get by default
// for the case of string it just works perfectly fine, but things go crazy if non strings are provided like numbers

const letters = ['a', 'f', 'e', 'g', 'r', 'c', 'b']
const numbers = [1, 5, 2, 12, 90, 35, 66, 22];

console.log(numbers.sort())
// this can be fixed by subtracting the first char code with the second one

console.log(numbers.sort((a, b) => {
    return a - b;
}))



// with the above case with numbers we can see that the numbers are sorted as per the first occuring character's code in a number and sorts based on that
// we don't need it that way




//@ when to use what sorting method
//# Insertion sort -- should be used when the input is small or almost sorted
//# Bubble sort --not very effecient so not used in real world, and it can be used for educational use
//# Selection sort -- same as bubble sort not effecient enough to get the work done
//# Merge sort -- it always comes up with O(n log n) and it is fast, divide and conquer.it takes much space for the operation so if space complexity is not the case then we can use this
//#Quick sort -- better than Merge sort, it has less space complexity and same speed, but for the worst case it would be slower and leading to O(n^2),



