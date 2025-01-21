//! Array vs LinkedList

/**
 * When you create an array of certain length, it will allocate memory for all the elements in the array upfront.
 * so you have the memory already assigned.
 *
 * Whereas in case of linked list, you don't allocate memory unless you add an element to the list.
 *
*/

//! Usage
/**
 * Linked list gives you optimised memory usage at the cost of runtime performance.
 * Array gives you optimised runtime performance at the cost of memory usage.
 *
 * When you have to get an element in list, you have to traverse the list, there is no binary search, the searching is always linear.
 * Array has the advantage of binary search. and you can directly point to the indices.
 */


//! ArrayList
/**
 * Array list id the dynamic implementation of array in linked list manner. Using Array as the fundamental data structure and writing the functions on it.
 *
 * As for an example, we have an array of 3 memory blocks created and are empty.
 * and we add one item in it so we have length of 1 but capacity of 3. that means we can store up to 3 numbers but we have length of 1.
 */

/**
 * get(index) - get function in this arrayList would be, when checked for an index we could check whether the querying index is within the bounds or not and return the proper response.
 * push(val) - so for this method we are checking the length and capacity of the arrayList and if the length is lesser than the capacity that means that we can save the item in it and increase the value of length.
 *          but in case of length exceeding the capacity we will create another new array of length of old ArrayList + incrementNumber (3 + 3). so in the new ArrayList we will iterate through all the elements and copy them over.
 *          to the new ArrayList and add the new element to the last and update the value of the length. //# Big O(1)
 * pop():T|undefined - this will do the same thing as push but in reverse manner. update the length minus. //# Big O(1)
 */

/**
 * ArrayLIst is suitable for operation like pop and push. like adding the element at the end and removing from the end. it is faster in those operations.
 * similar to Operations like Stack, first in Last out. it is not suitable for Queue like operations. examples below.
 *
 * so in the ArrayList, if we do Enqueue (adding the element at the starting spot).
 * so if you enqueue, underneath we are using array, so if you do write element at the first index it will write the element, overwriting the existing one.
 * so we have to increase the length of the array. do a loop and shift the element from n to n+1 index. and write the given element at the first spot.
 * and this will be O(n) operation.
 *
 * Exact same thing happens for Dequeue but in reverse, shift all the values from n to n-1.
 * and same thing happens to adding and removing in the middle as well. O(n)
 *
 * refer to the image ./images/arrayList.png
 */


//! Ring Buffer.  read about this later.
