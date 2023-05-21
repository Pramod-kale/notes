//@ unsorted array of very large in size
//@ input array is immutable
//@ duplicate values can be omitted
//@ time complexity <= O(n log n)
//@ find the value at the index at given nth index

//@ example
//# let array = [1,2,4,6,3,1,]
//# n = 4
//# output => 3 

const inputArray = [88, 3, 4, 6.4, 25, 99, 456, 23, 66, 44, 87, 44, 787, 2, 1, 2, 22, 1, 0, 0, 76, 33, 3, 3, 33, 3]



function findKValue(array, n) {
    n -= 1

    //!    first approach
    // const sortedArray1 = pramodSort(array)
    // return sortedArray1[n]

    //! second approach
    // const sortedArray2 = mergeSort(array)
    // let filteredArray = [];

    // sortedArray2.forEach(element => {
    //     if (!filteredArray.includes(element)) {
    //         filteredArray.push(element)
    //     }
    // });

    // return filteredArray[n]

}


const pramodSort = array => {

    //@ take the array, and create an array of length equal to the max number available in the array, and push the numbers into the newly created array.
    //@ now iterate through the newly created array and push the found values into new array making that sorted array
    //# faster O(n) in terms of time compared to merge sort, but takes more space O(n)


    let maxNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i]
        }
    }

    let tempArray = new Array(maxNumber)
    for (let i = 0; i < tempArray.length; i++) {
        tempArray[array[i]] = array[i]
    }

    let resultArray = []
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i]) {
            resultArray.push(tempArray[i])
        }
    }
    console.log('resultArray', resultArray);
    return resultArray;
}

const mergeSort = (array) => {
    //# space goes upto o(1)
    //# little bit slower O(n log n) compared to my kind of sort done above

    if (array.length === 1) {
        return array;
    }


    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle)


    return merge(
        mergeSort(left), mergeSort(right)
    )


}

const merge = (left, right) => {
    let result = [];

    let leftIndex = 0;
    let rightIndex = 0;


    while (leftIndex < left.length && rightIndex < right.length) {

        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    // console.log('result array:' + result)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}



let result = findKValue(inputArray, 4)
console.log('result', result)