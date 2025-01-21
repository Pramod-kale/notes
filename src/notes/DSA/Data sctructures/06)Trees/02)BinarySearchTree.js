// BST works on divide and conquer PaymentMethodChangeEvent, it splits into half and works on the parts

// simple rules for binary search tree
// 1) the biggest node should be on the right side of the tree

//? pros
// searching becomes faster because it traverses based on the size of of the element and divide and conquer method
// better than O(n)
// Ordered
// Flexible size



//? cons
// it doesn't have O(1) complexity
// if we keep on adding the elements which are greater in sizes it goes on adding them in one of the side of a binary tree, which is bad
//  because it will cause the time complexity of O(n) and looks similar as linked list, this is known as unbalanced binary tree, and the
// tree which haves the elements or nodes in the bothe the sides is called as balanced tree and this will have the time complexity of O(n)


//! Q) why is the unbalanced binary tree is bad
//* A) because it the nodes will get added to the one of the sides of binary tree and the nodes will create a unbalanced tree
//* and also it will lead to increase in time complexity O(n), and will look similar to linked list