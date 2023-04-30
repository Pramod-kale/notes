// bubble sort works by comparing the element in the indexes with the next index element, for example it
// takes the element which is in index[0] => 1 and compares it to the next element to it => 2.4. and if it is grater than
// that it will swaps the places with else continues comparing with next two elements


// implement a bubble sort for the following input

let array = [1, 2.4, 39, 05, 68, 87, 99, 5, 3, 22];


function bubbleSort(array) {

    let len = array.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }


    return array
}

const bubbleSort2 = (array, order) => {
    const len = array.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {

            if (order === 'descending') {
                if (array[j] < array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }

            if (order === 'acsending') {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }

        }
    }

    return array
}





console.log(bubbleSort2(array, 'acsending'))