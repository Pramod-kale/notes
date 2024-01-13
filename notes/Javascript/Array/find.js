

const customFind = (array, callback) => {

    let foundValue;
    console.log('foundValue', foundValue)


    //! this is better because the remaining iteration are skipped once the element is found
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (foundValue) {
            return foundValue;
        } else {
            foundValue = callback(element)
        }
    }

    //! this simply does extra iteration even after finding the value, not so effecient
    // array.forEach(element => {
    //     if (foundValue) {
    //         return foundValue
    //     } else {
    //         foundValue = callback(element)
    //     }
    // })

    // return foundValue
}

let array = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5]

const result = customFind(array, currentElement => (currentElement > 5) && currentElement)

console.log(result)