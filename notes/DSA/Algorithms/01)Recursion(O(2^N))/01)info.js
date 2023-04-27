// recursion is a algorithm which refers to itself and runs again
// a recursive function should have a base case to stop the stack being overflown
// should have a return keyword if it is returning something while recursing
// and a function call should be at the bottom of the line, because it will enter into recursion and the line below will never run

//! if you don't return anything from the recursive function that would return undefined from therecursed function

// for example
let value = 0;
const recurseLoop = () => {
    debugger
    if (value <= 3) {
        console.log(value)
        value++
        return recurseLoop() //@ or else do this
    }
    // return value //@ or else do this
}

console.log(recurseLoop())


// it will be like below if not returned

// recurseLoop(recurseLoop(recurseLoop(recurseLoop(return recurseLoop()))))

// it will be like below if returned

// recurseLoop(return recurseLoop( return recurseLoop(return recurseLoop(return recurseLoop()))))



// in this we also learn about the exponential time complexity O(2^N) which comes up with recursive algorithm refer to the screen shot in the folder
