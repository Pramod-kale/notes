


const customFilter = (array, callback) => {

    let filteredArray = [];


    array.forEach(element => {
        const returnValue = callback(element)
        if (returnValue) {
            filteredArray.push(returnValue)
        }

    })

    return filteredArray;

}

export let sampleArray = [2, 4, 3, 5, 6, 7, 8, 1, 67, 0, 5]


const result = customFilter(sampleArray, currentValue => (currentValue < 50) && currentValue)

// console.log(result)


const result2 = sampleArray.filter(currentValue => (currentValue < 50) && currentValue)

// console.log(result2)