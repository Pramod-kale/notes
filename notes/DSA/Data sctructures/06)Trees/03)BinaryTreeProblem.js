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
        debugger
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




                // else if (currentNode.right && currentNode.left) {
                //     currentNode = currentNode.right;
                //     this.insert(currentNode.left)
                //     return this;
                // }
                // if (!currentNode.right) {
                //     currentNode = currentNode.left;
                //     return currentNode;
                // } else if (!currentNode.left) {
                //     currentNode = currentNode.right
                //     return currentNode
                // }
            }
        }
        return 'nothing matched to remove'
    }
}


//                  56

//             5        100
//           1   6   -57-  900        
//                                   

const tree = new BinaryTree();

tree.insert(56)
tree.insert(5)
tree.insert(6)
tree.insert(100)
tree.insert(1)
tree.insert(900)
// tree.insert(57)
// tree.remove(100)


console.log(JSON.stringify(tree))

