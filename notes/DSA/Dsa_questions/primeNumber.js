console.clear()

const eratosthenes2 = (number) => {

    const array = []
    const maxIterableNumber = Math.sqrt(number);
    let output = [];

    for (let index = 0; index < number; index++) {
        array.push(true)
    }


    for (let index = 2; index <= maxIterableNumber; index++) {

        if (array[index]) {
            for (let xandex = index * index; xandex < number; xandex += index) {
                array[xandex] = false;
            }
        }

    }

    for (let index = 2; index < array.length; index++) {
        if (array[index]) {
            output.push(index)
        }

    }

    return output;

}


const eratosthenes = number => {

    let array = [];
    const maxIterableNumber = Math.sqrt(number);
    let output = [];

    for (let index = 0; index < number; index++) {
        array.push(true)
    }


    for (let index = 2; index <= maxIterableNumber; index++) {

        if (array[index]) {

            for (let xandex = index * index; xandex < number; xandex += index) {
                array[xandex] = false
            }

        }
    }



    for (let index = 2; index < array.length; index++) {
        if (array[index]) {
            output.push(index)
        }
    }


    return output;

}


const result = eratosthenes(10)
console.log(result)


const eratosthenes1 = (number) => {

    let numberArray = [];
    const maxIteration = Math.sqrt(number)

    for (let index = 2; index <= number; index++) {
        numberArray.push(index)
    }


    let filterdArray = numberArray

    for (let index = 2; maxIteration <= number; index++) {

        const stepFilter = filterdArray.filter(iteratingNumber => iteratingNumber % index !== 0)
        filterdArray = stepFilter

    }

    return filterdArray

}

// const result = eratosthenes(50)
// console.log(result)

