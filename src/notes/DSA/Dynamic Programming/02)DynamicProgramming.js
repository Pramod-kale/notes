



//# there are certain rules to think of when thinking of dynamic programming
//$ 1. Can be divided into subproblems
//$ 2. Recursive solution
//$ 3. Are there repetitive subproblems
//$ 4. Memoize subproblems

//# time complexity o(n)


// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...  every index value is the sum of previous two indexes


let counter = 0;
const fibCache = () => {
    let cache = {};


    return fib = n => {
        counter++
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n]
            }
        }
    }

}


const fiboo = fibCache()
console.log('faster', fiboo(100))
console.log(counter)