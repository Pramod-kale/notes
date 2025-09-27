// TODO log all pairs of array

const boxes = ['a', 'b', 'c', 'd', 'e'] // ! 11,12,13,14,15,21,22,23,24,25 .. so on

function logPairsOfArray(array) {
    const t1 = performance.now()
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(boxes[i], boxes[j])
        }
    }
    const t2 = performance.now()

    console.log(t2 - t1)
}

// logPairsOfArray(boxes)

//  in this scenario the function recieves an parameter and has a nested for loops, one loop is inside of another loop
//  in this case the big(O) becomes n^2
//  if there are nested loops we multiply both big(O) => big(n*n) ==> big(n^2)


// TODO print all numbers and their sum

const printAllNumberAndTheirSum = (numbers) => {
    console.log('these are numbers');
    numbers.forEach(number => {
        console.log(number)
    });

    console.log('and these are their sums')
    numbers.forEach(firstNumber => {
        numbers.forEach(secondNumber => {
            console.log(firstNumber + secondNumber)
        })
    });

}
printAllNumberAndTheirSum([1, 2, 3, 4, 5])

// so here in this example we can observe that there is a loop which gives us
// bug(n)
// and the second nested loop gives us n^2
// addding these gives us big(n + n^2) with consideration of scalability it can be seen that paramenters like n will not scale as
// compared to nested loops so that can ve neglected and it can become big(n^2)