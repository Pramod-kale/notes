const reduce = (array, callback, initialValue) => {


    console.log(array)
    console.log(callback)
    console.log(initialValue)

    // let tempInitValue = initialValue;


    // array.forEach(currentValue => {
    //     tempInitValue = callback(currentValue, tempInitValue)
    // })


}

let array = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5]

function myCallback(currentValue, accumulator) {
    return currentValue + accumulator
}

const result = reduce(
    array,
    myCallback(),
    0
)

console.log(result)