//! Binary search tree with depth first search approach



/**
 * In BST the rule is to keep the tree in particular order
 * 1) the left side nodes of the root node should be less than or equal to and the right side should be greater than the root node value.
 * this condition resembles quick sort where in the lhs is lesser or equal to the pointer and rhs is always greater.
 * src/DSA_2.0/the-last-algo-course/images/bstDFS.png
 */

const search = (curr: BinaryNode<number> | null, needle: number): boolean => {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }
    if (curr.value < needle) {
        return search(curr.right, needle);
    } else {
        return search(curr.left, needle);
    }

};

export const dfs_bfs = (head: BinaryNode<number>, needle: number): boolean => {
    return search(head, needle);
};