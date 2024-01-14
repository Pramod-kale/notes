//^ reference here : https://levelup.gitconnected.com/vimp-javascript-promise-implementation-challenges-5a4f120d8606
//^ Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure

/*
callbacks are functions passed as arguments to another functions, they are executed once the operation is completed
these are common patterns to handle asynchronous operations in older javascript
*/



//# callback hell is ugly to read, and hard to maintain, so to overcome with callback functions, we can use promises.

//# promises try to solve these callback pyramids, with a cleaner syntax and more understandable way

//$ every promise gives you back either a resolved value or a rejected reason.
// https://miro.medium.com/v2/resize:fit:720/format:webp/0*I8vzE0EZlY-_TUvb.png

/**
 * Promises has 4 stages.
 * Pending: before the event has happenend, the promises is in the pending state .
 * Settled: Once the event has happened it is in the settled state.
 * Fullfilled: Action related to the promise has succeeded.
 * Rejected: Action relate to the promise has failed
 */

// an example for promise
"use strict"
const promise = new Promise((resolve, reject) => {
    // do something async
    if (true) {
        resolve('promise has been resolve')
    } else {
        reject('promise has been rejected')
    }
})

// console.log(promise)

console.clear()

/**
 * there are couple of available methods available  for promises
 * Promise.all() : executes many promises parallell, it accepts an array of promises, returns only all the promises are resolved.
 *                 if one of them is rejected method will get rejected.
 */

const promiseArray = [
    new Promise((resolve, reject) => setTimeout(() => resolve('promise1 has been resolved'), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('promise2 has been resolved'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('promise3 has been resolved'), 3000))
]

// const promiseAll = Promise.all(promiseArray)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

//^ polyfills for Promise.all()


console.clear()
function all(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) {
            resolve([])
        }

        const responses = [];
        let count = 0;

        promises.forEach((element, index) => {
            Promise.resolve(element)
                .then(res => {
                    responses[index] = res;
                    count++;
                    if (count === promises.length) {
                        resolve(responses)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        });
    })
}

// const result = all(promiseArray)
// console.log(result.then(response => console.log(response)))



/**
 * Promise.allSettled() : method which accepts an array of promises, it returns a new promise that will resolve if all the promises 
 * in the array are settled, regardless of whether the promises are resolved or rejected
 */
//
console.clear()

const promiseArray1 = [
    new Promise((resolve, reject) => setTimeout(() => resolve('promise1 has been resolved'), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('promise2 has been resolved'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject('promise3 has been rejected'), 3000))
]

// const response1 = Promise.allSettled(promiseArray1)
//     .then(res => console.log(res))



//^ polyfills for Promise.allSettled()
console.clear()
async function allSettled(promises) {
    if (!promises.length) {
        return []
    }

    const resultPool = [];
    let count = 0;

    for (let index = 0; index < promises.length; index++) {

        try {
            const response = await promises[index]
            resultPool.push({ status: 'fulfilled', value: response })

        } catch (error) {
            resultPool.push({ status: 'rejected', reason: error })
        } finally {
            count++;
            if (count === promises.length) {
                return resultPool
            }
        }
    }
}


// const response2 = allSettled(promiseArray1)
//     .then(res => console.log(res))
//     .catch(error => console.log(error))

console.clear()


/**
 * promise.race() : expects an array of promises and returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
 */

// const racedPromise = Promise.race(promiseArray1).then(res => console.log(res)).catch(error => console.log(error))

//^ polyfill for Promise.race()

console.clear()
const race = promises => {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise
                .then(res => resolve(res))
                .catch(error => reject(error))
        })
    })
}

race(promiseArray1).then(res => console.log(res)).catch(error => console.log(error))

console.clear()


//$ implement a autoRetry on rejection based on


//$ the key to remember the process is
//@ 1) Sync code
//@ 2) All microtasks
//@ 3) First macro task
//@ 4) All newly added microtasks
//@ 5) Next macro task
