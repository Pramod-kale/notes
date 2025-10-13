(() => {

    interface TreeNode {
        val: number;
        left: TreeNode | null;
        right: TreeNode | null;
    }


    const findDepthOfBT = (root: TreeNode | null, depth: number): number => {

        if (root === null) {
            return depth;
        }

        //pre
        depth++;
        //recurse
        const left = findDepthOfBT(root.left, depth);
        const right = findDepthOfBT(root.right, depth);

        return Math.max(left, right);

        // post
    };



    // Sample trees to test findDepthOfBT
    const singleNode: TreeNode = { val: 1, left: null, right: null };

    const skewed: TreeNode = {
        val: 1,
        left: { val: 2, left: { val: 3, left: { val: 4, left: null, right: { val: 5, left: null, right: null } }, right: null }, right: null },
        right: null,
    };

    const tree: TreeNode = {
        val: 1,
        left: {
            val: 2,
            left: { val: 4, left: null, right: null },
            right: { val: 5, left: null, right: null },
        },
        right: {
            val: 3,
            left: null,
            right: { val: 6, left: null, right: null },
        },
    };

    console.log('singleNode depth ', findDepthOfBT(singleNode, 0));
    console.log('balanced tree depth ', findDepthOfBT(tree, 0));
    console.log('skewed tree depth :', findDepthOfBT(skewed, 0));
    console.log("----------------------------");


    const iterative = (root: TreeNode | null): number => {

        if (root === null) {
            return 0;
        }

        const stack: [TreeNode | null, number][] = [];

        stack.push([root, 1]);
        let depth = 0;

        while (stack.length > 0) {
            const [node, currDepth] = stack.pop() as [TreeNode, number];
            depth = Math.max(currDepth, depth);

            if (node.left !== null) {
                stack.push([node.left, currDepth + 1]);
            }
            if (node.right !== null) {
                stack.push([node.right, currDepth + 1]);
            }

        }


        return depth;
    };

    console.log('singleNode depth ', iterative(singleNode));
    console.log('balanced tree depth ', iterative(tree));
    console.log('skewed tree depth :', iterative(skewed));

})();