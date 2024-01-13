// there are two types in linked list
// 1) singly linked list
// 2) doubly linked list

//  linked list consists on one node that points to another node and this series goes on, the first node is called as head node
//  and the last node is called as tail of the node, since the tail is the last node it will always point towards the null value

// another point here is linked list is made use when there was a collision problem in the hash tables 



//* for example

const linkedList = ['apples', 'orange', 'grape'];

// in linked list it would be like this example below

// apples
// 2344 -- > orange
//           342423 -- > grape
//                       3452345 -- > null


// ? Why Linked List compared to arrays
//  loose structure, will give the  flexibilty to insert element in anywhere in the middle of the list
//  arrays are indexed and LL is linked to neighbor element called node and we iterate/traverse through the list until we find/ get the null that is end of list
//  LL are sorted compared to hash tables
//  LL has o(1) for prepend and append, hand has O(n) for lookpu, insrt, delete operations


//since javascript doesn't come with LL we will be creating our own check 03)LinkedList.js for more



// 10 -- > 5 -- > 16


// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             head: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }