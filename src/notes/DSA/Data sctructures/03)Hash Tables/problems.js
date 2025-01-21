// given an array print the first recurring/repeating number by implementing hash tables
const array1 = [2, 5, 1, 2, 3, 4, 1, 2, 4] // should return 2
const array2 = [2, 5, 1, 1, 1, 2, 3, 4, 1, 2, 4] // should return 1
const array3 = [2, 3, 4, 5] // should return undefined

const findRecurringNumber = (array) => {
    for (i = 0; i < array.length; i++) {

        for (j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                // pairs.push(i)
                // pairs.push(j)
                return array[i]
            }
        }
    }
}


// findRecurringNumber([2, 5, 1, 2, 3, 4, 1, 2, 4])



const findRecurringNumber2 = (array) => {

    let object = new Object()

    for (i = 0; i < array.length; i++) {

        if (object[array[i]]) {
            console.log('haha it contains ' + array[i])
            return
        } else {
            object[array[i]] = array[i]
        }
    }

    console.log(object)
}


// findRecurringNumber2([2, 5, 5, 2, 3, 4, 1, 2, 4, 0])






