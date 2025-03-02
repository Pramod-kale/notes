//! Trees
/**
 * $ Big O will be O(n) for the tree
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
 *
*/

/**
 * These are referred as depth first search, because we are reaching into the leaf node first, we go deeper and deeper into the tree until we get the leaf node
 * and return back the parent node na go deeper.
 *
 */
/**
 * there are three types of tree search.
 * always look for left node first and right node after that
 * 1) pre order - you reach the value as you enter root node=> leftnode=> its leftnode => if no value trace back and rightnode=> if no leftnode or rightnode => trace back to parent and search again.
 * 2) in order - you reach the value while tracing back the parent, you go deep into the leaf node and reach to the value while tracing back to the parent.
 * 3) post order - you reach to the value from the bottom of the tree to the top, you go deep into the tree, reach the value of leaf node, trace back look for leaf node at right side and reach the value,
 *    trace back and reach the value of parent node, and trace back to the parent node and reach for the leaf node on the other side
 *
 * the root node always gonna be reached first in pre order, in the middle in in-order and at the last in post order
 *
 * look for the image for reference ./images/treeTraversal.png
 */
//! Depth Fist Traversal
//! Binary tree pre order search


function walk(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) {
        return path;
    }

    path.push(node.value);

    walk(node.left, path);
    walk(node.right, path);

    return path;
}

export function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}


function walkInOrder(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) {
        return path;
    }
    walkInOrder(node.left, path);
    path.push(node.value);
    walkInOrder(node.right, path);

    return path;

}

export function in_order_search(head: BinaryNode<number>): number[] {
    return walkInOrder(head, []);
}

function walkPostOrder(node: BinaryNode<number> | null, path: number[]): number[] {
    if (!node) {
        return path;
    }
    walkPostOrder(node.left, path);
    walkPostOrder(node.right, path);
    path.push(node.value);

    return path;

}

export function post_order_search(head: BinaryNode<number>): number[] {
    return walkPostOrder(head, []);
}
