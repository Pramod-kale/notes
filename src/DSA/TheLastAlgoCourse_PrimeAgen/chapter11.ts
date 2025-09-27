//! Heap data structure
/**
 * find the image here ./images/heap.png
 * Heap data structure is a binary tree where every child and grand child is smaller (max heap) or larger (min heap) than the current node
 *
 * Whenever a node is added we must adjust the tree
 * Whenever a node is deleted, we must adjust the tree
 * There is no traversing the tree
 *
 *
 * heap DS uses an array to store the tree, to find the respective child of a node we use the following formulas:
 * * left child = 2 * index + 1
 * * right child = 2 * index + 2
 *
 *  to find the parent of a node we use the following formula:
 * * parent = Math.floor((index - 1) / 2)
 *
 *  to find  the last node, just use the length of the array - 1
 */

export class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number):void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }
    private leftChild(index: number): number{
        return index * 2 + 1;
    }
    private rightChild(index: number): number {
        return index * 2 + 2;
    }

    private heapifyUp(index:number): void {
        if(index === 0) {
            return;
        }

        const p = this.parent(index);
        const parentValue = this.data[p];
        const value = this.data[index];
        if (parentValue > value) {
            this.data[index] = parentValue;
            this.data[p] = value
            this.heapifyUp(p)
        }
    }

    private heapifyDown(index: number): void{
        if (index >= this.length) {
            return;
        }

        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (index >=this.length || left >= this.length) {
            return;
        }

        const leftV = this.data[left];
        const rightV = this.data[right];
        const value = this.data[index];

        if (left > right && value > rightV) {
            this.data[index] = rightV;
            this.data[right] = value;
            this.heapifyDown(right);
        }
        else if (right > left && value > leftV) {
            this.data[index] = leftV;
            this.data[left] = value;
            this.heapifyDown(left);
        }
    }
}
