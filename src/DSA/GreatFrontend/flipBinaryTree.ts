(() => {

    interface TreeNode {
        val: number;
        left: TreeNode | null;
        right: TreeNode | null;
    }

    function binaryTreeFlip(root: TreeNode | null): TreeNode | null {

        if (root === null) {
            return null;
        }

        //pre

        // recurse
        const left = binaryTreeFlip(root.right);
        const right = binaryTreeFlip(root.left);

        root.left = right;
        root.right = left;

        //post
        return root;
    }

})();