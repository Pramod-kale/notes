// Implement a function makeCounter that accepts an optional integer value(defaults to 0) and returns an object that contains the following methods:

// get(): returns the current value.
//     increment(): increments the current value and returns it.
//         decrement(): decrements the current value and returns it.
//             reset(): resets the current value to the initial value.


const counter = (initialValue = 0) => {
    let count = initialValue;

    const get = () => {
        return count
    }
    const increment = () => {
        return count += 1

    }
    const decrement = () => {
        return count -= 1
    }

    const reset = () => {
        return count = 0
    }

    return {
        get,
        increment,
        decrement,
        reset
    }

}


const myCounter = counter()

console.log(myCounter.increment())
console.log(myCounter.increment())
console.log(myCounter.decrement())
console.log(myCounter.increment())
console.log(myCounter.reset())
console.log(myCounter.get())


