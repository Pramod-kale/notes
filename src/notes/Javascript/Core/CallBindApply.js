/* 
Call Bind Apply

these methods are used for binding the objects to the functions/objects
it is like borrowing one's function from an object to another object.

*/

/**
Call: this will call the function, expects the arguments to be passed should be (object to bind with, arg1, arg2, argn-1)
Apply: this will call the function, expects the arguments to be passed should be (object to bind with, [arg1, arg2, argn-1])
Bind: this will return the function and the function call be called again, expects the arguments to be passed should be (object to bind with, arg1, arg2, argn-1)



**/


function greetAll(age) {
    console.log(`helloo ${this.name}, your age is ${age} `)
}

const greetArwfnc = (age) => {
    console.log(`helloo ${this.name}, your age is ${age} `)
}

const monster = {
    name: 'shrek',
    greetInbuilt() {
        console.log(`helloo ${this.name}, your age is ${this.age} `)
    }
}

const monster2 = {
    name: 'robin',
    age: 100
}


//! call method, apply method

//@ you can borrow the function from an object to another object
monster.greetInbuilt.call(monster2)

//@ you can call the function directly available
greetAll.call(monster, 23)
greetAll.apply(monster, [56])


//! bind method
console.log('---------')
greetAll.bind(monster, 23)()
const greetAllBind = greetAll.bind(monster, 23)
greetAllBind(42) //^ can't give values after binding, you can skip values and give them on the returned method

