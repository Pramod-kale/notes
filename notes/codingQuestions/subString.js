console.clear()


const confirmSubstring = (string, target) => {

    const array = string.split(' ')

    const targetLength = target.length;
    const finalword = array[array.length - 1];

    const trimmedString = finalword.slice(finalword.length - targetLength,)

    if (trimmedString === target) {
        return true
    } else {
        return false
    }


}

const result = confirmSubstring("Open sesame", "same")

console.log(result)