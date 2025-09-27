// this type of sorting comes up when you think the list is almost sorted and we get almost o(n)
// time complexity


// first check the size of the element and compare it to the first element and decide where it should be position according the conpared value
// and make those two as a set, then check for third element and compare that to the set which already has made and decide where it should be inserted
// and thiskeeps on going

(() => {
let array = [2, 1, 4, 3, 8, 5, 9, 7];


const insertSort = array => {
    const len = array.length;

    for (let i = 0; i < len; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0])
        } else {
            for (let j = i; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0])
                }
            }
        }
    }
}
insertSort(array)
console.log(array)
})()