//! Binary tree practice question
/**
 * @ Q) Write a function to test whether given two trees are equal or not, both in shape and values given.
 * ^ S) Since both shape and values need to be checked we can use DFS as it retains the shape of the tree, where as BFS doesn't
 */



export
function DFS_compare_tree(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return DFS_compare_tree(a.left, b.left) && DFS_compare_tree(a.right, b.right);

}
