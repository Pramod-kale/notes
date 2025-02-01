//! Trees
/**
 * Tree are type of structures which single entity is called as node, whereas a single node might have 1 or more children.
 *  the common representation which can be used as example is the DOM tree, which has html => body => div elements.
 *
 * The common notation used for th representing the trees are.
 * 1) root => the very first node of a tree
 * 2) height => the longest path from the root to the most child node.
 * 3) Binary tree => a tree in which has at most 2 children, at least 0 children
 * 4) general tree => a tree with 0 or more children
 * 5) Binary search tree => a tree in which has a specific ordering to the nodes and at most 2 children
 * 6) leaves => a node without children.
 * 7) balanced tree => a tree is perfectly balanced when any node's left and right children have the same height.
 * 8) branching factor => the amount of children a tree has.
 */

//! Binary tree pre order search

const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
    if (!curr) {
        return path;
    }

    // recurse
    // pre
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    return path;
};

const preOrderSearch = (head: BinaryNode<number>): number[] => {
    return walk(head, []);
};
