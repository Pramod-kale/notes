/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state(the lexical environment).
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
 */

//@ Disadvantages
// 1. Closures are memory intensive.
// 2. Closures are not garbage collected, can slow down the application.

//@ Advantages
// 1. Closures are used to create private variables.
// 2. can be used to cache the result of memory expensive function

//! let and const are treated as block scoped variables. if you declare var it will be treated as global scoped


const parent = () => {
    const name = 'parent'
    const child = () => {

        console.log(name)
    }
}

//$ child has the access to the parents variable because of the closure. but parent can't have the access to child's variable.



function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();


// in this above function when the outer function is run, it returns the inner function which refers to its parent's scope variable.
// even though the outer function run child function keeping a reference of the variable in its lexical scope when it is executed.
// so that is the reason the value of the variable is still available even after the outer function is run.


//! private lexical scope and shared lexical scope

console.clear()

function makeAdder(x) {
    return function (y) {
        return x + y
    }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(2))
console.log(add10(5))

console.clear()


const counter = (function () {
    let count = 0;
    function modify(value) {
        count += value;
    }
    return {
        increment: function () {
            modify(+1);
        },
        decrement: function () {
            modify(-1);
        },
        value: function () {
            return count;
        }
    }
}())


console.log(counter.value())
console.log(counter.increment())
console.log(counter.increment())

console.log(counter.decrement())
console.log(counter.value())


// here the function  counter  is executed soon after  its declaration because of IIFE.

// or else we can also execute the function by assigning that to a variable
console.clear()

const counterMaker = function () { }

const counter1 = counterMaker()
// counter1.value()