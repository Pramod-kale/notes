// this algo, compares the element in the array, until it finds smallest, once it finds the smallest
// it replaces the the value from the first index to the found smallest element and goes on

let array = [1, 7, 5, 8, 0, 6, 2, 4, 3, 9];


const selectionSort = array => {
    const len = array.length;

    debugger;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        let min = array[i];

        for (let j = i + 1; j < len; j++) {
            // console.log(array[i], array[j])

            if (array[i] > array[j]) {
                let nestedMin = array[j];
                array[j] = array[min];
                min = nestedMin;
            }

        }
        array[minIndex] = min;


    }

    return array;

}


// console.log(selectionSort(array))



const selectionSort2 = array => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i];


        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}


const sort = array => {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        let temp = array[i];

        for (let j = i + 1; i < length; j++) {
            if (array[j] < array[i]) {
                min = j;
            }

            array[i] = array[min]
            array[min] = temp;
        }

    }
    return array;
}










console.log(selectionSort(array))