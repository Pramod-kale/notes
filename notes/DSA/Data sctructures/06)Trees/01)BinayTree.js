//* there are some rules applied to binary tree

//  one node should have have either 0, 1 or  2 child, and one child have only one parent

// there are types of binary tree such as
// 1. perfect binary tree - all the nodes which have either two childrens or no childrens
// 2. Full binary tree - the nodes which has wither two childrens or no childrens

// for the perfect binary tree, the number of nodes goes on doubling ever step
// the total number of nodes at the bottom of the tree will be equal to the sum of all nodes above it's level + 1

// the time complexity of binary trees are O(log n)

// for the sake of calculation we can judge that the total numbers of nodes in the level can be represented by the below formula, (applies for perfect binary tree)
// level 0: 2 ^ 0 = 1;
// level 1: 2 ^ 1 = 2;
// level 2: 2 ^ 2 = 4;
// level 3: 2 ^ 3 = 8;

