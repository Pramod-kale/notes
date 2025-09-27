(() => {
    //$ it is technique of optimising the program by memoising the data
    //# if there is anything that can be memoised then dynamic programming can be implemented


    // Memoization means caching

    // for example we are executing a function that calculates a huge amount of data and takes time to calculate it obviously
    // so what we will do there, we memoize the data and store that and if the same calculation is executed again we will return the memoized data
    const memoisedAddTo100 = () => {

        let cache = {};

        return (n) => {
            if (n in cache) {
                console.log('short time');
                return cache[n];
            } else {
                console.log('long time');
                cache[n] = n + 100;
                return cache[n];
            }
        };

    };

    const memoized = memoisedAddTo100();

    console.log(memoized(5));
    console.log(memoized(5));
    console.log(memoized(5));



    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...  every index value is the sum of previous two indexes
    // lets take an example of fibonacci series, i need to get the value of the index position at 10, so this will take a hell lot of time to calculate over recursion

    const fibonacci = (n) => {
        if (n < 2) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    // fibonacci(10) //$ so roughly this will take around 177 recursions

    // we can optimise this with caching

    //# there are certain rules to think of when thinking of dynamic programming
    //$ 1. Can be divided into subproblems
    //$ 2. Recursive solution
    //$ 3. Are there repetitive subproblems
    //$ 4. Memoize subproblems

})();