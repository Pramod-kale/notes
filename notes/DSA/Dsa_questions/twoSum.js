console.clear()

const twoSum = (array, target) => {

    let object = {}

    for (let index = 0; index < array.length; index++) {
        object[index] = array[index]

    }

    for (let index = 0; index < array.length; index++) {
        if ((array[index] + object[index + 1]) === target) {
            return [array.indexOf(array[index]), array.indexOf(object[index + 1])]
        }
    }


}


const result1 = twoSum([3, 2, 3], 6)
console.log(result1)

