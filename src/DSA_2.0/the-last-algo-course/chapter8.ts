//! Doubly Linked List

type TNode<T> = {
    value: T;
    prev?: TNode<T>;
    next?: TNode<T>;
};

class DLL<T> {
    public length: number;
    private head?: TNode<T>;
    private tail?: TNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as TNode<T>;

        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("index exceeding the length of LL");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        // for the below logic refer the image ./images/nodeInMiddle.png
        curr = curr as TNode<T>;
        const node = { value: item } as TNode<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            node.prev.next = curr;
        }
    }


    append(item: T): void {
        this.length++;
        const node = { value: item } as TNode<T>;
        if (!this.tail) {
            this.head = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    remove(item: TNode<T>): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;

        }

        if (!curr) {
            return undefined;
        }

        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (curr.prev) {
            curr.prev = curr.next;
        }
        if (curr.next) {
            curr.next = curr.prev;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.prev = curr.next = undefined;
        return curr.value;
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;

    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }
        return this.remove(node);

    }
    private getAt(idx: number): TNode<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }
        return curr;
    }
}
