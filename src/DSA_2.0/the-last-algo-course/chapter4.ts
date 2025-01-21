//! Linked list.
/**
 * linked list have elements represented as nodes, each nodes has a pointer to a next and previous node location,
 * by using them we need to traverse.
 * Each node has a pointer for the next/previous node, each node has a address in a memory and are located separately.
 * when you link a node to another node, we are just taking the reference to that node and linking them, Accessing the memory is considered faster in computers.
 *
 *
 * Addition, deletion, append, prepend, get head/tail all are constant time, because we are just modifying the pointers in the node.
 * Insertion or deletion in the middle of the list is linear, because you have to traverse the list and keep a count of the indices.
 *
 * refer to ./images/linkedList.png for whiteboard diagram
*/


//! Queue
/**
 * Queue is just a specific implementation of linked list.
 * $The insertion and removal are first in and first out FIFO
 * refer the image ./images/queue.png
 */

type QNode<T> = {
    value: T;
    next?: QNode<T> | undefined;
};

class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;
        this.length++;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        const tail = this.tail;
        this.tail.next = node;
        this.tail = node;

        tail.next = undefined;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;
        const head = this.head;
        this.head = this.head.next;
        // free the memory once after deleting the head. in js it is handled by garbage collector.
        // but still we have to do it for the sake of understanding to feel it is completed.
        head.next = undefined;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

}


//! Stack.
/**
 * A stack a backwards of queue
 * refer image ./images/stack.png
 */

type SNode<T> = {
    value: T;
    prev?: SNode<T>;
};

class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: QNode<T>): T {
        const node = { value: item } as SNode<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return this.head.value;
        }

        node.prev = this.head;
        this.head = node;
        return this.head.value;
    }

    pop(): T | undefined {

        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as SNode<T>;
        this.head = head?.prev;
        return head?.value;
    }


    peek(): T | undefined {
        return this.head?.value;
    }


}
