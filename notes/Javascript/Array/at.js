console.clear()

function customAt(index, array) {

    if (index >= 0) {
        return array[index]
    }

    let length = array.length;
    return array[length - (-1 * (index - 1))]

}

let array = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5]

const result = customAt(6, array)
console.log(result)