
// !  for loop

(() => {
const forLoop = (input) => {

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
    console.log('----------------------------------')

}

// ! forEach

const forEachLoop = (input) => {

    input.forEach(element => { console.log(element) })
    console.log('----------------------------------')

}

// ! forOf

const forOfLoop = (input) => {

    for (let i of input) {
        console.log(i)
    }
    console.log('----------------------------------')
}

const array = [5, 6, 7, 8, 9, 0]

forLoop(array)
forEachLoop(array)
forOfLoop(array)
})()