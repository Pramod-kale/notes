//! Tree traversal -- Breadth first traversal
/**
 * ! this will be big O of O(n^2)
 *
 * BFS reach the nodes on a tree level, and goes on deeper one level after the other.
 * it reaches the first level head node, then the children of the head node that is second level, and goes on to the leaf node level.
 * refer to the image here src/DSA_2.0/the-last-algo-course/images/bfs1.png
 * src/DSA_2.0/the-last-algo-course/images/bfs2.png
  */

/**
 * Look for a number is present or not in the tree using BFS
 */
export function breadth_first_search(head: BinaryNode<number>, needle: number): boolean {

    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length) {
        const curr = q.shift() as BinaryNode<number> | undefined | null;

        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }
        q.push(curr.left);
        q.push(curr.right);
    }
    return false;

}
