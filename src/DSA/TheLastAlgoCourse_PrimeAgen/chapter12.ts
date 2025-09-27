// ! Graph
/**
 * Graph is a series of nodes with some amount of connections or no connections,
 * img source here ./images/graph1.png
 * Terminologies:
 * 1) cycle - When you start at Node(x), follow the links and end back at Node(x).
 * 2) Acyclic - A graph that contains no cycle
 * 3) Connected - When every node has a path to another node.
 * 4) Directed - When there is a direction to the connection
 * 5) Undirected - !directed
 * 6) Weighted - The edges have a weight associated with them
 * 7) Dag - Directed, acyclic graph
 *
 * A cycle requires at least 3 nodes to be a cycle.
 *
 * Implementation:
 * There are two types a graph can be implemented.
 * 1) Adjacency list
 * 2) Adjacency matrix
 * refer to the image here ./images/graph2.png
 *
 *
 *
 * Basic searches:
 * BFS and DFS still exist on a graph, and they are virtually no different than on a tree.
 *
 */

(() => {

    type weightedAdjMatrix = number[][];
    type adjGraphFunc = (graph: weightedAdjMatrix, source: number, needle: number) => number[] | null;

    const bfsAdjacencyGraph: adjGraphFunc = (graph, source, needle) => {

        const seen = new Array(graph.length).fill(false);
        const prev = new Array(graph.length).fill(-1);

        seen[source] = true;
        const q: number[] = [source];

        do {
            const curr = q.shift() as number;
            if (curr === needle) {
                break;
            }

            const adjs = graph[curr];
            for (let i = 0; i < graph.length; ++i) {
                if (adjs[i] === 0) {
                    continue;
                }
                if (seen[i]) {
                    continue;
                }
                seen[i] = true;
                prev[i] = curr;
                q.push(i);
            }

            seen[curr] = true;
        } while (q.length);

        if (prev[needle] === -1) {
            return null;
        }

        // build it backwards
        let curr = needle;
        const out: number[] = [];

        while (prev[curr] !== -1) {
            out.push(curr);
            curr = prev[curr];
        }
        return [source].concat(out.reverse());

    };

    // Example graph (Adjacency Matrix)
    // 0 - 1 - 2
    // |   |
    // 3 - 4

    const graph: number[][] = [
        //0  1  2  3  4
        [0, 1, 0, 1, 0], // 0
        [1, 0, 1, 0, 1], // 1
        [0, 1, 0, 0, 0], // 2
        [1, 0, 0, 0, 1], // 3
        [0, 1, 0, 1, 0], // 4
    ];

    const source = 3;
    const needle = 2;

    console.log("BFS Path:", bfsAdjacencyGraph(graph, source, needle)); // [3, 0, 1, 2]


    type graphEdge = { to: number, weight: number; };
    type weightedAdjList = graphEdge[][];
    type adjGraphList = (graph: weightedAdjList, source: number, needle: number) => number[] | null;

    type walkfunc = (graph: weightedAdjList, curr: number, needle: number, seen: boolean[], path: number[]) => boolean;

    const walk: walkfunc = (graph, curr, needle, seen, path) => {

        if (seen[curr]) {
            return false;
        }
        seen[curr] = true;

        // recurse
        // pre
        path.push(curr);
        if (curr === needle) {
            return true;
        }

        // recurse
        const list = graph[curr];
        for (let i = 0; i < list.length; ++i) {
            const edge = list[i];
            if (walk(graph, edge.to, needle, seen, path)) {
                return true;
            }
        }
        //post
        path.pop();


        return false;
    };


    const dfsAdjacencyGraph: adjGraphList = (graph, source, needle) => {
        const seen = new Array(graph.length).fill(false);
        const path: number[] = [];

        walk(graph, source, needle, seen, path);
        if (path.length === 0) {
            return null;
        }

        return path;
    };


    // Example graph (Adjacency List)
    // 0 - 1 - 2
    // |   |
    // 3 - 4
    // Each edge has weight 1 for simplicity
    const adjList: weightedAdjList = [
        [{ to: 1, weight: 1 }, { to: 3, weight: 1 }],      // 0
        [{ to: 0, weight: 1 }, { to: 2, weight: 1 }, { to: 4, weight: 1 }], // 1
        [{ to: 1, weight: 1 }],                            // 2
        [{ to: 0, weight: 1 }, { to: 4, weight: 1 }],      // 3
        [{ to: 1, weight: 1 }, { to: 3, weight: 1 }],      // 4
    ];

    const dfsSource = 3;
    const dfsNeedle = 2;
    console.log("DFS Path:", dfsAdjacencyGraph(adjList, dfsSource, dfsNeedle)); // e.g. [3, 0, 1, 2] or similar

})();

// ! Dijkstra's Algorithm
/**
 * Dijkstra's algorithm is used to find the shortest path from a source node to all other nodes in a weighted graph.
 * It works on graphs with non-negative weights.
 */
(() => {
    type graphEdge = { to: number, weight: number; };
    type weightedAdjList = graphEdge[][];

    const hasUnvisited = (seen: boolean[], dists: number[]): boolean => {
        return seen.some((s, i) => !s && dists[i] < Infinity);
    };

    const getLowestUnvisited = (seen: boolean[], dists: number[]): number => {
        let idx = -1;
        let lowestDistance = Infinity;
        for (let index = 0; index < seen.length; index++) {
            if (seen[index]) {
                continue;
            }

            if (lowestDistance > dists[index]) {
                lowestDistance = dists[index];
                idx = index;
            }

        }
        return idx;
    };


    const dijkstra = (source: number, sink: number, arr: weightedAdjList): number[] => {

        const seen = new Array(arr.length).fill(false);
        const prev = new Array(arr.length).fill(-1);
        const dists = new Array(arr.length).fill(Infinity);
        dists[source] = 0;




        while (hasUnvisited(seen, dists)) {
            const curr = getLowestUnvisited(seen, dists);

            seen[curr] = true;

            const adjs = arr[curr];
            for (let i = 0; i < adjs.length; i++) {
                const edge = adjs[i];
                if (seen[edge.to]) {
                    continue;
                }

                const dist = dists[curr] + edge.weight;
                if (dist < dists[edge.to]) {
                    dists[edge.to] = dist;
                    prev[edge.to] = curr;
                }
            }
        }

        const out: number[] = [];
        let curr = sink;
        while (prev[curr] != -1) {
            out.push(curr);
            curr = prev[curr];
        }

        out.push(source);
        return out.reverse();

    };
    // Example graph (Adjacency List)
    // 0 - 1 - 2
    // |   |
    // 3 - 4
    // Each edge has weight 1 for simplicity
    const adjList: weightedAdjList = [
        [{ to: 1, weight: 1 }, { to: 3, weight: 1 }],      // 0
        [{ to: 0, weight: 1 }, { to: 2, weight: 1 }, { to: 4, weight: 1 }], // 1
        [{ to: 1, weight: 1 }],                            // 2
        [{ to: 0, weight: 1 }, { to: 4, weight: 1 }],      // 3
        [{ to: 1, weight: 1 }, { to: 3, weight: 1 }],      // 4
    ];

    const dfsSource = 4;
    const dfsNeedle = 2;
    console.log("dijkstra:", dijkstra(dfsSource, dfsNeedle, adjList)); // e.g. [3, 0, 1, 2] or similar


})();
