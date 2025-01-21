const customMap = (array, callback) => {

    let newArray = [];
    array.forEach(element => {
        newArray.push(callback(element))

    })

    console.log(newArray)
    console.log(array)
    return newArray;

}

let array = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5]


const result = customMap(array, currentElement => currentElement * 10)
console.log(result)