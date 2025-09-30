(() => {
    //Amazon
    // stack is a data structure, follows Last In First Out.
    // Assume you're eating pancake as you finish one chef tops you one more at the top and you eat the top one first.

    /**
     * Requirement:
     * new Stack() => creates a instance, doesn't accept any value in constructor
     * push() => adds item on top
     * pop() => removes item from top
     * isEmpty() => determines if the stack is empty
     * peek() => returns the item on top
     * length() => determines the length of stack
     */

    // Class based approach

    class MyStack {
        private stack: Array<number> = [];
        private len: number = 0;


        constructor() {
            this.len = 0;
            this.stack = [];
            return this;
        }

        push(item: number) {
            this.stack.push(item);
            this.len++;
            return this;
        }
        pop() {
            this.stack.pop();
            this.len--;
            return this;
        }
        isEmpty() {
            return this.len === 0;
        }

        peek() {
            return this.stack[this.len - 1];
        }

        length() {
            return this.len;
        }
    }

    const stack = new MyStack();
    console.log(stack.push(5));
    console.log(stack.length());
    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.isEmpty());

    console.log("--------------");

    // function constructor approach

    interface IMyStackFunc {
        stack: number[];
        len: number;
        push(item: number): this;
        pop(): this;
        isEmpty(): boolean;
        peek(): number | undefined;
        length(): number;
    }

    function MyStackFunc(this: IMyStackFunc) {
        this.stack = [];
        this.len = 0;

        this.push = function (item: number): IMyStackFunc {
            this.stack.push(item);
            this.len++;
            return this;
        };
        this.pop = function (): IMyStackFunc {
            this.stack.pop();
            this.len--;
            return this;
        };
        this.isEmpty = function (): boolean {
            return this.len === 0;
        };
        this.peek = function (): number | undefined {
            return this.stack[this.len - 1];
        };
        this.length = function (): number {
            return this.len;
        };
    }


    const stack1 = new (MyStackFunc as unknown as { new(): IMyStackFunc; })();
    console.log(stack1.push(5));
    console.log(stack1.length());
    console.log(stack1.peek());
    console.log(stack1.pop());
    console.log(stack1.isEmpty());

})();
