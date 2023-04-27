// during recursion we observe that for the nested kind of conditions it will call itself so many times that it will lead to consume
// time exponentially (refer to the functional call happening during recursive functional calls in the folder image)


//# anything that can be implemented recursively can be implemented iteratively




//@ pros and cons of recursion
// #pros
// DRY keeps the code clean and neat
// improved readability

// #cons
// requires a large amount of memory in comparision of iterables,because of this systems with low configuration may get stack overflow


//! when to use RECURSION?
//* everytime you are dealing with tree or  converting into tree consider recursion
//* devided into a number of sub problems and that can be instances of the same problem
//* each instance of the problem is identical in nature
//* the solution of each subproblem can be combined to solve a problem
//* divide and conquer using recursion