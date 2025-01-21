//  we have an array here 
const letters = ['a', 'b', 'c', 'd', 'e']

// push adds an element at the end of an array so it will be O(1)
letters.push('f') //? O(1)

// pop remves the last element from an array
letters.pop(); //? O(1)

// unshift adds the element in the first index
letters.unshift('x') //? O(n)

// splice
letters.splice(2, 0, 'alien')