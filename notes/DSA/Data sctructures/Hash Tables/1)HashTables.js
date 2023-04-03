//! Hash Tables

// these are also called as hash maps/ dictionaries/ maps/ unordred maps / objects

// in JS we call it as objects
// the data will be stored in the form of key:value pairs

//* the keys will be used to find the corresponding values, generally both the key as well as pairs are also saved in the memory

// ! Hash Functions
//* hash functions are generally a functions which generates a fixed length for each input it gets

//?  when you provide a input to hash function that will generate a hash value, and the output will be same as long as the input is same, this is called as idempotent

//  when we store our values inside of objects or hash tables it is going to do the same process it will generate the hash value and will save
//  the value which was provided with the key

// from this idempotent in DS we get really fast data access

// also because os hash function, every time you save a value it goes through the process of idempotentation and saves the value, but this comes with a trade off for
// time, this will take some time during these process

// TODO the time complexity for hash tables are O(1)


// ! Disadvantages
