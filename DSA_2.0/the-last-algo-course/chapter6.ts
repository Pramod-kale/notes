//! Recursion.
// It's a function which calls itself until a problem is solved. This usually involves a base case/
// A base case is the point in which the problem is solved at.

//#Read more about Async recursion in javascript.

/**
 * Recursion has something known as return Address, return Value, Argument.
 * *) Return Address is where the function needs to return after. let's say the function is returning some value and it needs to return somewhere.
 *      The address of the function who called it,
 * *) Return Value is the value the function is returning
 * *) Argument is the value the function got passed.
 *
 * ---
 * refer the whiteboard image for reference ./images/recursion.png
 * so when a function gets called it keeps the return address stored so that when the function returns something it will return that value to the address.
 * also it has a return value and argument.
 */

// the simplest function would be in recursion is

function foo(n: number): number {
    if (n === 1) {
        return n;
    }

    const val = n + foo(n - 1);
    return val;
}

/**
 * in the example above when a function called.
 * 1) it keeps the track of return address to return back later.
 * 2) return value which is not finalised as the function hasn't return value is not complete as it relying on another function return value so it will be incomplete.
 * 3) and the argument it is taking.
 *
 * the path/track of these function calls is known as stack trace. the function is stacking on below the other with the reference.
 *
 * Recursion function has three parts in it
 * 1) pre - the code before teh recurse function call
 * 2) recurse - function call itself
 * 3) post - the code after recurse function call
 */

//! Path finding: Recursive case
//! Maze Solver:

/**
 * we have this array of string with the maze like structure and we have to reach to the end from the start.
 * [
 *  "#########E#",
 *  "           ",
 *  "#S#########"
 * ]
 *
 * we have to start from S and reach to the E, we have to find the path.
 * but there are cases we have to check for and they are considered as base cases.
 * if we encounter base case we have to return back,
 * Base Case:
 * 1) It's the wall: # symbol
 * 2) It's off the map: in case you go off the map you have to return back to the map
 * 3) It's the End we are looking for
 * 4) If you have visited the block before you have to come back and look for another block.
 *
 *
 * so there are the base cases. and we can move in 4 directions, up,down,right and left.
 */


/**
 * When to use recursion?
 * its not able to be done via for loop.
 */

const testArg = [
    "############## ##",
    "#######        ##",
    "#       #########",
    "# ###############",
];

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
];

function walk(maze: string[], wall: string, curr: any, end: any, seen: boolean[][], path: any): boolean {

    // off the map
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.x > maze.length) {
        return false;
    }

    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // three stages in recurse
    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();
    return false;

}

export default function solve(maze: string[], wall: string, start: any, end: any): any {
    const seen: boolean[][] = [];
    const path: any = [];
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}

console.log(solve(testArg, "#", { x: 14, y: 0 }, { x: 1, y: 4 }));