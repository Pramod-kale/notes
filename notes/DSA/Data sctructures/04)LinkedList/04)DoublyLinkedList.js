
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head;
        this.length = 1;
    }


    append(value) {
        const newNode = {
            value,
            next: null,
            previous: null
        }
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value,
            next: this.head,
            previous: null
        }
        this.head = newNode;
        this.head.previous = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(array)
        return array
    }

    traverse(index) {
        let currentNode = this.head;
        let counter = 0;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    insert(index, value) {
        let newNode = {
            value,
            next: null,
            previous: null
        }

        if (index >= this.length) {
            return this.append(newNode);
        }

        const currentNode = this.traverse(index - 1); // 3
        const nextNodePointer = currentNode.next; // 5
        currentNode.next = newNode; // pointing to new node we created
        newNode.previous = currentNode; // pointing to current node from our new node
        newNode.next = nextNodePointer; // 
        nextNodePointer.previous = newNode;
        this.length++;

        return this.printList();
    }

    remove(index) {


        if (index > this.length) {
            throw new Error('index is out of bound')
        }

        let previousNode = this.traverse(index - 1);
        let nextNode = this.traverse(index + 1);
        previousNode.next = nextNode;

        this.length--;
        return this;

    }

}

const linkedList = new DoublyLinkedList(10)

linkedList.append(5)
linkedList.prepend(6)
linkedList.insert(2, 3)
console.log(linkedList)