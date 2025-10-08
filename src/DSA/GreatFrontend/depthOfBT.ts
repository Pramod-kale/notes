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
    console.log('singleNode depth (current function):', findDepthOfBT(singleNode, 0));

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
    console.log('balanced tree depth (current function):', findDepthOfBT(tree, 0));

    const skewed: TreeNode = {
        val: 1,
        left: { val: 2, left: { val: 3, left: { val: 4, left: null, right: { val: 5, left: null, right: null } }, right: null }, right: null },
        right: null,
    };
    console.log('skewed tree depth (current function):', findDepthOfBT(skewed, 0));

})();