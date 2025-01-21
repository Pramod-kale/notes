console.clear()

const customEvery = (array, callBack) => {

    let counter = 0;


    array.forEach(element => {
        if (callBack(element)) {
            counter++
        }
    });

    return counter === array.length
}

const isBelow100 = (currentValue) => {
    return currentValue < 100
}


let array = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5]


const result = customEvery(array, currentValue => currentValue < 50)
console.log(result)