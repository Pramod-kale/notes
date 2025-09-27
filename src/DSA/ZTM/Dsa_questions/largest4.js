console.clear()

(() => {
const largest4 = array => {

    let largeArray = [];

    for (let index = 0; index < array.length; index++) {

        let bigNumber = array[index][0];
        for (let xandex = 0; xandex < array[index].length; xandex++) {
            if (array[index][xandex] > bigNumber) {
                bigNumber = array[index][xandex]
            }
        }
        largeArray.push(bigNumber)

    }


    return largeArray

}


const array = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
const result = largest4(array)
console.log(result)

})()