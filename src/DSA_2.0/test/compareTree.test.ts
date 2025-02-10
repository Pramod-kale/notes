import { DFS_compare_tree } from "../the-last-algo-course/practice/compareTreesEquality"

describe('DFS_compare_tree', () => {
    test('should return true for identical trees', () => {
        // Tree 1:     1
        //           /   \
        //          2     3
        const tree1: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 3, left: null, right: null }
        }

        // Tree 2:     1
        //           /   \
        //          2     3
        const tree2: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: { value: 3, left: null, right: null }
        }

        expect(DFS_compare_tree(tree1, tree2)).toBe(true)
    })

    test('should return false for different structured trees', () => {
        // Tree 1:     1
        //           /
        //          2
        const tree1: BinaryNode<number> = {
            value: 1,
            left: { value: 2, left: null, right: null },
            right: null
        }

        // Tree 2:     1
        //               \
        //                2
        const tree2: BinaryNode<number> = {
            value: 1,
            left: null,
            right: { value: 2, left: null, right: null }
        }

        expect(DFS_compare_tree(tree1, tree2)).toBe(false)
    })

    test('should return true for empty trees', () => {
        expect(DFS_compare_tree(null, null)).toBe(true)
    })

    test('should return false when one tree is empty', () => {
        const tree: BinaryNode<number> = {
            value: 1,
            left: null,
            right: null
        }
        expect(DFS_compare_tree(tree, null)).toBe(false)
        expect(DFS_compare_tree(null, tree)).toBe(false)
    })
})
