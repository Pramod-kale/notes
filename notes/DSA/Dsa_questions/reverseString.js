const reverse = string => {

    let reversString = '';
    console.log(string.length)

    for (let index = string.length; index >= 0; index--) {
        reversString += string.charAt(index)
    }

    return reversString

}

const result = reverse('pramod')
console.log(result)