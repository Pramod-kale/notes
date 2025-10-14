1) Javascript Engine
    1) Parser
    2) AST
    3) Interpreter
    4) Compiler
    5) Combo of two

2) Writing optimized code
    1) Memoization
    2) Inline caching
    3) Hidden classes => creating using inbuilt objects
    4) Managing arguments => within functions using args

3) Call stack and memory heap
    1) Memory heap
        - place to store and write info
    2) Call Stack
        - a stack to keep a track of where the code is currently at execution in order
        - FILO

4) Stack Overflow
    - When the stack gets overflown i.e. memory running out of space
    1) Garbage Collection
        - memory leaks
        - JS uses mark and sweep method to garbage collect
        - JS is single threaded => single callstack => synchronous language
    2) Synchronous
        - being a single threaded lang, that's where topics like event loop and callback queue comes in
    3) Event loop and callback queue
        - web API's, LIBUV, callstack, callback queue, event queue
    4) Job queue
        - micro task introduced from ES6, EL prioritizes promises than web API's.
        - job queue has more priority than the callback queue.
    5) Promises
        - something which is side loaded from JS single thread.
        - it is a assurance that it will return something or an error with a reason.
        - has 3 states => pending, result and error.
        1) 3 popular ways to do promise
            - parallel (all together) => Promise.all([]), sequential(one after the other) => async await and race(who finished first) => Promise.race([])
    6) Threads, concurrency and parallelism
        - Web workers (not so important about concurrency in the frontend part) good to read, link from ztm cheat sheet [read more about in readme file](/README.md)

5) Execution Context
    - code always run inside a execution context => a env within which code is ran
    - 2 types od context 1) global 2) function
    - 2 stages in each 1) creation and 2) execution phase
    - as JS starts to read code it creates Global execution context

    1) GLOBAL EXECUTION CONTEXT
        1) Creation Phase
            - global obj is created
            - initializes `this` keyword to global
        2) Execution Phase
            - Variable env is created
            - Memory space for var variables and functions created
            - Initializes all variables to undefined (AKA `hoisting`)
            - Places them with any functions into memory

    2) FUNCTION EXECUTION CONTEXT
            - Only when a function is invoked, does a function exe cont gets created
        1) Creation Phase
            - arg obj created with any arguments
            - initializes `this` keyword to point called or to global obj if not specified
        2) Execution Phase
            - Variable env created => memory space for variable and functions created
            - Initializes all var to undefined and places them into memory with any new functions

    2) Arrow functions
        - These functions are now just syntactic sugar and alternatives to normal functions
        - These doesn't have their own binding to this, arguments, super, new keywords and cannot be used as constructors

        ```
            var obj = {
            // does not create a new scope
            i: 10,
            b: () => console.log(this.i, this),
            c: function() {
                console.log(this.i, this);
            }
            };

            obj.b(); // prints undefined, Window {...} (or the global object)
            obj.c(); // prints 10, Object {...}
        ```

6) Hoisting
    - Hoisting is the process of putting all variable and function declarations into memory during the compile phase
    - functions are fully hoisted and initializes to undefined and let, const var are hoisted but not initialized a value
    - var variables are hoisted but values are set to undefined, until they are set inline. if used before value assigned it will return undefined
    - functions can be called anywhere as they are fully hoisted, if var, let const used before they are declared then they will throw reference error.
    - function declaration gets fully hoisted and function declaration doesn't gets fully hoisted
    ```
        // function expression gets hoisted as undefined
        var sing = function() {
        console.log("uhhhh la la la");
        };
        // function declaration gets fully hoisted
        function sing2() {
        console.log("ohhhh la la la");
        }
    ```
    - the period where the variable is hoisted and being executed, where the value isn't set yet is called as `temporal dead zone`. this applies to let and const variables. [read more about TDZ](https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/)

