type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

type TNode<T> = {
    value: T;
    prev?: TNode<T>;
    next?: TNode<T>;
};

type QNode<T> = {
    value: T;
    next?: QNode<T> | undefined;
};

type SNode<T> = {
    value: T;
    prev?: SNode<T>;
};
