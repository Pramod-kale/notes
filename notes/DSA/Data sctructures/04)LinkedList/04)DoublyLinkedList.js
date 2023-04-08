
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }


    append(value) {
        const newNode = {
            value, next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = { value, next: this.head }
        this.head = newNode;
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
            next: null
        }

        if (index >= this.length) {
            return this.append(newNode);
        }

        const currentNode = this.traverse(index - 1);
        const nextNodePointer = currentNode.next;
        newNode.next = nextNodePointer
        currentNode.next = newNode;
        this.length++;

        return this;
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

const linkedList = new LinkedList(10)

linkedList.append(5)
linkedList.append(9)
linkedList.prepend(99)
linkedList.insert(2, 89)
linkedList.insert(4, 555)

linkedList.remove(3)
linkedList.remove(2)
linkedList.remove(5)


linkedList.printList()

console.log(linkedList)