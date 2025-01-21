//# Big O notation
//# linked list have time complexity of => access O(n), search O(n), insertion O(1), deletion O(n)
//# linked list have space complexity of => O(n)

//$ Theory
//$ linked list is a linear collection od data elements, which the order is not given by their physical placement in memory. instead each element points to the next.
//$ it is a data structure consisting of groups of nodes which together forms a sequence, in simplest form each nodes  consist of dat a and reference to next node(link) in the sequence.
//$ The drawback of linked list is that access time i linear, faster access, such as random access is not feasible.


//$ Note points
//$ they can hold any type of data,
//$ they can be sorted or unsorted,
//$ they can be duplicated or unique,

//^ Advantages
//$ insert and delete can be quick

//^ Disadvantages
//$ slow to access to the nth element, have to traverse the whole list to get the nth element => o(n)

//! operations included
//! Insertion (append, prepend), Search, Deletion, Traversal, Reverse Traverse

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        return this
    }

    // Add a node to the end of the list
    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }

        const tempNode = this.head;
        this.head = newNode;
        this.head.next = tempNode;
        return this;
    }


}



const myLL = new LinkedList();
console.log(myLL)
myLL.append(15)
myLL.append(8)

console.log(myLL)