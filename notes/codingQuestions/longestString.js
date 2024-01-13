const longestString = str => {


    const array = str.split(' ')
    let longest = 0;

    for (let index = 0; index < array.length; index++) {
        debugger
        if (array[index].length > longest) {
            longest = array[index].length
        }

    }

    return longest

}

const result = longestString('Find the Longest Word in a String')

console.log(result)