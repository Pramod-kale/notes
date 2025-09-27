
//  reverse a string
// input 'hi my name is pramod'
// output

const stringReverse = (string) => {

    const array = string.split('')
    let reversedString = ''

    for (let index = string.length - 1; index >= 0; index--) {
        reversedString += string[index]
    }

    console.log(reversedString);
    return reversedString;
}

// stringReverse('hi my name is pramod')


mergeSortedArray = (arr1, arr2) => {

    let array = [...arr1, ...arr2]

    let sortedArray = []
    let tempVar = 0;


    

}


mergeSortedArray([1, 5, 9], [4, 7, 8])