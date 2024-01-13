console.clear()


const repeatString = (string, n) => {


    if (!(n > 0)) {
        return ''
    } else if (n === 1) {
        return string
    }

    let result = '';

    for (let index = 1; index <= n; index++) {

        result = result + string
    }

    return result;
}



const result = repeatString("abc", -20)
console.log(result)