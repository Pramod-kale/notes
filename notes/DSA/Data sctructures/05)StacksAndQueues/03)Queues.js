class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//* Queue representation implementing  linked list 

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }


    peek() {
        console.log(this.first)
        return this.first
    }
    enqueue(value) { // adds element to the first
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return this;
        } else {
            this.last.next = newNode;
            this.last = newNode;
            this.length++;
            return this;
        }
    }

    // removes the first added element
    // remember //! FIFO
    dequeue() {
        if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length--;
            console.warn('no elements are there to remove')
        }


        else {
            this.first = this.first.next;
            this.length--
            return this;

        }
    }

}



const myQ = new Queue()

myQ.enqueue('andrew')
myQ.enqueue('micheal')
myQ.enqueue('JOHN')
myQ.dequeue()
myQ.dequeue()
myQ.dequeue()

// myQ.peek()
console.log(myQ)
