import { pre_order_search, in_order_search, post_order_search } from '../the-last-algo-course/chapter9';

describe('Binary Tree Pre-order Search', () => {
    test('single node tree', () => {
        const tree = {
            value: 1,
            left: null,
            right: null
        };
        expect(pre_order_search(tree)).toEqual([1]);
    });

    test('tree with left child only', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: null
        };
        expect(pre_order_search(tree)).toEqual([1, 2]);
    });

    test('tree with right child only', () => {
        const tree = {
            value: 1,
            left: null,
            right: {
                value: 3,
                left: null,
                right: null
            }
        };
        expect(pre_order_search(tree)).toEqual([1, 3]);
    });

    test('complete binary tree', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 4,
                    left: null,
                    right: null
                },
                right: {
                    value: 5,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 3,
                left: {
                    value: 6,
                    left: null,
                    right: null
                },
                right: {
                    value: 7,
                    left: null,
                    right: null
                }
            }
        };
        expect(pre_order_search(tree)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });

    test('unbalanced tree', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: {
                    value: 3,
                    left: {
                        value: 4,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: null
        };
        expect(pre_order_search(tree)).toEqual([1, 2, 3, 4]);
    });
});


describe('Binary Tree In-order Search', () => {
    test('single node tree', () => {
        const tree = {
            value: 1,
            left: null,
            right: null
        };
        expect(in_order_search(tree)).toEqual([1]);
    });

    test('tree with left child only', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: null
        };
        expect(in_order_search(tree)).toEqual([2, 1]);
    });

    test('complete binary tree', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: { value: 4, left: null, right: null },
                right: { value: 5, left: null, right: null }
            },
            right: {
                value: 3,
                left: { value: 6, left: null, right: null },
                right: { value: 7, left: null, right: null }
            }
        };
        expect(in_order_search(tree)).toEqual([4, 2, 5, 1, 6, 3, 7]);
    });
});

describe('Binary Tree Post-order Search', () => {
    test('single node tree', () => {
        const tree = {
            value: 1,
            left: null,
            right: null
        };
        expect(post_order_search(tree)).toEqual([1]);
    });

    test('tree with left child only', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: null,
                right: null
            },
            right: null
        };
        expect(post_order_search(tree)).toEqual([2, 1]);
    });

    test('complete binary tree', () => {
        const tree = {
            value: 1,
            left: {
                value: 2,
                left: { value: 4, left: null, right: null },
                right: { value: 5, left: null, right: null }
            },
            right: {
                value: 3,
                left: { value: 6, left: null, right: null },
                right: { value: 7, left: null, right: null }
            }
        };
        expect(post_order_search(tree)).toEqual([4, 5, 2, 6, 7, 3, 1]);
    });
});

