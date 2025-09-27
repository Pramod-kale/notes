class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//* stack representation implementing  linked list 

class MyStack {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }


    peek() {
        console.log(this.top)
        return this.top
    }
    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
            return this;
        } else {
            newNode.next = this.top
            this.top = newNode;
            this.length++;
            return this;
        }
    }

    pop() {

        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null
        }

        this.top = this.top.next;
        this.length--;
        return this;
    }

    printList() {

        let array = [];
        let nodeHolder = this.top;

        while (nodeHolder !== null) {
            array.push(nodeHolder.value)
            nodeHolder = nodeHolder.next
        }
        console.log(array)
        return array;

    }
}

// const stack = new MyStack()

// stack.push('google')
// stack.push('pornub')
// stack.push('sxyprn')
// stack.push('youtube')
// stack.peek()
// stack.printList()
// stack.pop()
// stack.peek()

// stack.printList()
// console.log(stack)


//* stack representation implementing  array

class MyStack2 {
    constructor(value) {
        this.stack = [];
    }


    peek() {
        console.log(this.stack[this.stack.length - 1])
        return this.stack[this.stack.length - 1]
    }


    push(value) {
        this.stack.push(value)
        return this;
    }

    pop() {
        this.stack.pop()
    }
}

const stack2 = new MyStack2()

stack2.push('google')
stack2.push('youtube')
stack2.push('facebook')
stack2.push('pornhub')
// stack2.peek()

stack2.pop()
console.log(stack2)
