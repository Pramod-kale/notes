import { breadth_first_search } from '../the-last-algo-course/chapter10';

describe('Breadth First Search', () => {
    test('should find value in a binary tree', () => {
        const tree = {
            value: 10,
            left: {
                value: 5,
                left: {
                    value: 2,
                    left: null,
                    right: null
                },
                right: {
                    value: 7,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 15,
                left: {
                    value: 12,
                    left: null,
                    right: null
                },
                right: {
                    value: 18,
                    left: null,
                    right: null
                }
            }
        };

        expect(breadth_first_search(tree, 7)).toBe(true);
        expect(breadth_first_search(tree, 18)).toBe(true);
        expect(breadth_first_search(tree, 99)).toBe(false);
    });

    test('should handle single node tree', () => {
        const tree = {
            value: 1,
            left: null,
            right: null
        };

        expect(breadth_first_search(tree, 1)).toBe(true);
        expect(breadth_first_search(tree, 2)).toBe(false);
    });
});
