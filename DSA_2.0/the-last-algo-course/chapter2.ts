/**
 * The two crystal ball problem.

 * description-
 * Given the crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.
 */

/**
 * so in this algo we have two balls which will break at some given height and we don't know what the height is.
 * the height will look like this as array
 * [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1...]
 * the ball will break at a certain height and afterwards, so we need to find that height particularly.
 * we can do linear search and iterate over all the items that gives us o(n).
 * also we can combine binary and jump right through the mid point and check for the breaking height and yes we found the breaking height, but what about the other ball
 * which also has a breaking height which lies just before the the midpoint we found with binary search, yes again we have to iterate through linearly and that gives as O(n).
 * 
 * so to tackle this we have sqrt(n) algo which is rare to find but efficient than O(n). so here is how it goes.
 *$ check for the image attached as ./images/sqrtn.png
 * so give the array we jump the array in sqrt of n places, and keep the record of last checkpoint.
 * if we get the right break point all we have to do is go back to the last checkpoint and check from there and this gives us the sqrt(n).
 * 
 * down we wll have the implementation. 
*/

const sqrtArr = [false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true]

const sqrtSearch = (breaks:boolean[]):number => {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length))
    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jmpAmount;
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}


console.log(sqrtSearch(sqrtArr))