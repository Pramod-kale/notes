//# sort 10 schools from your house by distance
//* use insertion sort for these kind of small type of data (because the data size is small)


//# sort ebay sort listing by the current bid amount
//* use radix sorting or counting sort (because the data are large)

//# sport scores on ESPN
//* use Quick sorting (most efficient, almost sorted )

//# Massive database needs to sort through past years user data
//* Merge Sort (data is so big)

//#Almost sorted Udemy review data needs to update and add 2 new reviews
//* Insertion sort (almost sorted)

//# Temperature records for the past 50 yeads in Canada
//* Radix Counting sort (large amount of data(no decimal))
//* Quick sort (if has decimal)


//# Large user name database needs to be sorted, Data is vary random
//* Merge sort or Quick sort

//# you want to teach sorting for the first time
//* Bubble sort, Selection sort




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

let array = [2, 5, 6, 8, 7, 3, 4, 1, 11, 15];

let answer = pramodSort(array)
console.log(answer)