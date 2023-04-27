// in this we will have an exercise about the finding factorial of a number


//  find a factorial of a number with a for loop
let time3 = performance.now()

const factForLoop = (num) => {

    let factorial = 1;

    for (let i = 2; i <= num; i++) {

        factorial = factorial * i
    }


    return factorial;

}
let time4 = performance.now()

// console.log(factForLoop(5))
let factorial = 1;

const factorialRecurse = (num) => {
    factorial = factorial * num
    if (num >= 2) {
        return factorialRecurse(num - 1)
    }
    return factorial;
}


let time1 = performance.now()
const factorialRecurse2 = (num) => {
    debugger
    if (num == 2) {
        return 2
    }

    return num * factorialRecurse2(num - 1);
}
let time2 = performance.now()

console.log('recurse', time2 - time1)
console.log('for loop', time4 - time3)




factorialRecurse2(5)
factForLoop(5)

//  find a factorial of a number with a recursive method
