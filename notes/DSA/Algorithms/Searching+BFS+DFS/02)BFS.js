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


    breadthFirstSearchIterative(value) {
        let list = [];
        let queue = [];
        let currentNode = this.root;
        queue.push(currentNode);


        while (queue.length > 0) {
            currentNode = queue.shift();

            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return list


    }



    breadthFirstSearchRecursive = (queue, list) => {

        if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list)


    }


}

//                  56

//             5        100
//           1   6    57   900        
//                                   

const tree = new BinaryTree();

tree.insert(56)
tree.insert(5)
tree.insert(6)
tree.insert(100)
tree.insert(1)
tree.insert(900)
tree.insert(57)
// console.log(tree.breadthFirstSearchIterative())
console.log(tree.breadthFirstSearchRecursive([tree.root], []))

// tree.remove(100)



