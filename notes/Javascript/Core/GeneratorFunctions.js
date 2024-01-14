/**
 Generator functions are a special type of function that can be used to create iterators.

Whenever gen function generate a value, it does so with the yield keyword rather that return keyword.

yield keyword suspends the functions execution and sends a value back to the caller, but retains the value where it left off, so that it can \
resume the execution. the function cd ontinues to resume immediately after the last yield

 */

//$ arrow functions are not supported in generator function

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}


console.log(generator())



/*
Generator object, when generator function called it is returned with generator object not the value
generator object are used with .next() method or using for loop to iterate over the values
*/

console.log(generator().next())


/*
when value is read by next method it returns an object containing the value yielded along with the boolean value of done
done indicates that the yielding of values is completed or not/ function generator has completed execution or not
*/



// Generate Function generates three  
// different numbers in three calls 
function* fun() {
    yield 10;
    yield 20;
    yield 30;
}

// Calling the Generate Function 
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.return().value);

//$ gen.return() will finish the generator


console.clear()

function* nextNatural() {
    let naturalNumber = 1;

    // Infinite Generation 
    while (true) {
        yield naturalNumber++;
    }
}

const myGenerator = nextNatural();

for (let index = 0; index < 10; index++) {
    console.log(myGenerator.next())

}


console.clear()
/**
 yield and yield*
 yield pauses the generator execution and returns the value of the expression which is being written after the yield keyword
 yield* it iterates over the opearnd and returns the each values until done is true

*/

const array = [2, 4, 6, 8, 10];

function* generatorIterator() {
    yield 1;
    yield* array;
    yield array;
    yield 3;
}

for (let value of generatorIterator()) {
    console.log(value)
}

console.clear()

//$ can't yield in a callback functions

function* generatorCallback() {
    array.map(item => {
        yield item
    })
}

console.log(generatorCallback().next())