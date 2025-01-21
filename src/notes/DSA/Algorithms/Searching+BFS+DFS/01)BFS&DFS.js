//$ Breadth First Search

// this is a type of search in order to search for a matching element in a tree, we should check for every element/node in the tree until we find a match or the tree ends

// for example consider the below tree

//              5
//           3      8
//         1   2  7   9


// for breadth first search we have to visit every node from left to right in each level of a tree
// for the first level it is 5
// for the second level it is 3,8
// for the third level it is 1,2,7,9

// it goes from left to right in levels and we have to search for every node and also it gives raise to complexity of //! O(n)

//# it uses extra memory because to track the necessary child nodes on the given level



//$ Depth First Search

// this is same as the BFS but the difference is that its approach, this checks through the nodes from top to bottom

// for example consider the below tree

//              5
//           3      8
//         1   2  7   9


// this search continues until the searching has reached the leaf node/ end of tree or the matching element is found

// it searches from top to bottom in the example above case it will be like
// it searches from 5,3,1
// since it is a leaf node it goes back to the nearest available ancestor that is 3 and continues to search for unexplored nodes in this  case it is 2
// after 2 it will go back to nearest unexplored ancestor node that is 5 now, and continues to search in right side, because it is unexplored


//# doesn't takes up much space
//# the tree traversal starts from left side of the tree


//$ BFS v/s DFS

//@ BFS

//* pros
// shortest path
// easier in finding the closest nodes

//! cons
// requires more memory to keep the track of nodes it traverses



//@ DFS

//* pros
// takes lesser memory because it tracks the nodes it visits once only and replaces when it finds another ancestor
//

//! cons
// because of searching in depth and coming back and going into depth again in tree can make it slow in operation



//$ exercise about the BFS DFS

//! if you know the solution isn't too far from the root
//* BFS

//! if the tree is very deep and solution are very rare
//* BFS (because DFS would take very long time in here traversing throgh the tree)

//! if the tree is very wide
//* DFS (BFS would need a lot of memory to keep the track of nodes which it traverses)

//! If the solution are very frequent but located in  very deep
//* DFS

//! Determining whether a path exists between two nodes
//* DFS

//! Finding shortest path
//* BFS