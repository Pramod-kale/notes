//  we will be building the graph shown in image
// the image will be of unweignted and undirected cyclic graph

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {

        };
    }



    addVertex(node) {
        this.numberOfNodes++;
        this.adjacentList[node] = [];
    }

    addEdge(node1, node2) {

        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)

    }

    showConnection() { }
}

const graph = new Graph()


graph.addVertex('0')
graph.addVertex('1')
graph.addVertex('2')
graph.addVertex('3')
graph.addVertex('4')
graph.addVertex('5')
graph.addVertex('6')



graph.addEdge('1', '2')
graph.addEdge('1', '0')
graph.addEdge('1', '3')
graph.addEdge('0', '2')
graph.addEdge('2', '4')
graph.addEdge('4', '3')
graph.addEdge('4', '5')
graph.addEdge('5', '6')

console.log(graph)