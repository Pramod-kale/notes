console.clear()

const lengthOfLongestSubstring = string => {

    let subString = string.charAt(0)
    let character = string.charAt(0);
    let wordArray = []

    for (let index = 1; index < string.length; index++) {
        debugger
        let char = string.charAt(index)
        if (character !== char) {
            subString += char
        } else {
            wordArray.push(subString)
            subString = ''
        }
        character = string.charAt(index)
    }

    console.log(wordArray)

    let longestWord = wordArray[0];
    for (let index = 1; index < wordArray.length; index++) {
        if (wordArray[index].length > longestWord.length) {
            longestWord = wordArray[index]
        }

    }


    return longestWord

}

const result = lengthOfLongestSubstring('pwwkew')
console.log(result)