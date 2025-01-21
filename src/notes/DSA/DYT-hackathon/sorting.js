
const pramodSort = array => {

    //@ take the array, and create an array of length equal to the max number available in the array, and push the numbers into the newly created array.
    //@ now iterate through the newly created array and push the found values into new array making that sorted array

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

    return resultArray;
}




const array1 = [4, 5, 3, 6, 7, 9, 3, 2, 6];
const array2 = [1, 5, 78, 9, 0, 3, 2, 6, 8, 9];


const mergeArrays = (arr1, arr1Length, arr2, arr2Length) => {

    if (arr1.length < 2 && arr2.length < 2) {
        return arr1 = [...arr1, ...arr2]
    }

    arr1Length && (arr1 = arr1.slice(0, arr1Length))
    arr2Length && (arr2 = arr2.slice(0, arr2Length))

    arr1 = [...arr1, ...arr2];



    //$ pramod sort
    // return pramodSort(arr1)

    //$ Bubble Sort
    const len = arr1.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            if (arr1[j] > arr1[j + 1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }

        }
    }

    return arr1
}


const result = mergeArrays(array1, 2, array2, 3)
console.log('result', result)