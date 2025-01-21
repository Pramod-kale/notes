const makeCounter = (initialValue = 0) => {

    let count = initialValue || 0;

    return () => {
        return count += 1
    }
}

const counter = makeCounter(5)

console.log(counter())
console.log(counter())
console.log(counter())