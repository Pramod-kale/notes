// Given a number N returns the index value of Fibonacci sequence where the sequence is.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// The pattern of the sequence is that each value is the sum of the 2 previous values that means.That for N = 5 => 2 + 3.

const fibonacciForLoop = (n) => {
    let array = [0, 1];

    for (let i = 2; i <= n; i++) {
        array.push(array[i - 1] + array[i - 2])
    }
    console.log(array[n])
    return array[n]
}


const fibonacciRecurse = (n) => {

    if (n < 2) {
        return n;
    }
    return fibonacciRecurse(n - 1) + fibonacciRecurse(n - 2)

}

console.log(fibonacciRecurse(10))

















// fibonacciForLoop(10)