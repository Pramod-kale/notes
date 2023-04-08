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

// TODO the time complexity for hash tables are O(1) insert, lookup, delete, search


// ! Disadvantages

// ? Hash Collisions ===>  https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
//  in the hash table there are spaces to store the values called buckets (there are 13 buckets as such) these buckets will recieve the values based
//  on the hash function output
//  the output from the hash function will get divided by the number of buckets (13) so the resulting modulus will get stored in the respective buckets
//  so think that you add certain value to the hash table and it gets stored in bucket number 5 based on the calculation and again you add another value unfortunately
//  it will also get added in the same bucket as previous then this will happen for certain number of times
//  now the bucket number 5 has really considerable amount of values which got are stored in the same bucket, now searching a particular value becomes slower
//  this will be called as hash collision

//  this will slow down the reading and writing in the table the time complexity will be like o(n/k) where as k = the size of elements in the bucket but neglecting the
//  constants in calculation as per the rules the complexity will get down to O(n)