console.clear()

const callback = (array, cb) => {

    for (let index = 1; index < array.length; index++) {

        const cbValue = cb(array[index])

        if (cbValue) {
            return array[index]
        }

    }
    return undefined


}

const result = callback([1, 2, 3, 4], num => num % 2 === 0)


console.log(result)