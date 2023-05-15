// # for the reference we are going to take up the data structure we build for binary search tree.

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }


    insert(value) {
        const node = new Node(value);


        if (this.root === null) {
            this.root = node;
        } else {

            let currentNode = this.root;
            while (true) {

                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }


    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false
    }


    remove(value) {
        if (!this.root) {
            return 'there is nothing to be removed'
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {

                if (!currentNode.right && !currentNode.left) {  // in case of it is a leaf node, no child nodes to this
                    console.log('if it is leaf node, i.e no child nodes to this')
                    if (parentNode.right.value === currentNode.value) {
                        parentNode.right = null
                        return this;
                    } else if (parentNode.left.value === currentNode.value) {
                        parentNode.left = null
                        return this;
                    }
                }
                else if (currentNode.right || currentNode.left) { // in case of one child node is present
                    if (currentNode.left) { // check for left node
                        parentNode.right = currentNode.left;
                        return this;
                    }
                    if (currentNode.right) { // check for right node
                        parentNode.left = currentNode.right;
                        return this;
                    }
                }
            }
        }
        return 'nothing matched to remove'
    }



    //@  1) Inorder DFS

    depthFirstSearchInorder() {
        return traverseInorder(this.root, [])

    }
    //@  2) Preorder DFS

    depthFirstSearchPreorder() {
        return traversePreorder(this.root, [])

    }
    //@  3) Postorder DFS

    depthFirstSearchPostorder() {
        return traversePostorder(this.root, [])

    }




}

function traverseInorder(node, list) {

    if (node.left) {
        traverseInorder(node.left, list)
    }

    list.push(node.value)

    if (node.right) {
        traverseInorder(node.right, list)
    }

    return list

}


function traversePreorder(node, list) {

    list.push(node.value)

    if (node.left) {
        traverseInorder(node.left, list)
    }


    if (node.right) {
        traverseInorder(node.right, list)
    }

    return list

}

function traversePostorder(node, list) {


    if (node.left) {
        traverseInorder(node.left, list)
    }


    if (node.right) {
        traverseInorder(node.right, list)
    }

    list.push(node.value)

    return list

}

const tree = new BinaryTree();

tree.insert(56)
tree.insert(5)
tree.insert(6)
tree.insert(100)
tree.insert(1)
tree.insert(900)
tree.insert(57)

console.log(tree.depthFirstSearchPostorder())


//#                  56
//#             5        100
//#           1   6    57   900




    //@ for DepthFirstSearch there are actually types of traversal. 1) Inorder, 2) Preorder, 3) Postorder

// for the Inorder the traversal will look like //$   [1, 5, 6, 56, 57, 100, 900 ];
// for the PreOrder the traversal will look like //$  [56, 5, 1, 6, 100, 57, 900 ];
// for the PostOrder the traversal will look like //$ [1, 6, 5, 57, 900, 100, 56 ];

//# with the PreOrder we can recreate a tree again, because it is more ordered similar to the tree, compared to the other traversal 