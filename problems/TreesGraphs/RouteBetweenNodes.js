// Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes

const { Queue } = require("../../data-structures/queue");

function isConnected(n1, n2) {
  // thought process:
  // basically, the question is asking whether n1 and n2 is connected (REMEMBER THIS IS DIRECTED, n1 -> n2 != n2 -> n1).
  // we can use an approach of BFS to find the path, start from n1. and after everything visited, if n2 never founded, return false,
  // once the we tranverse and get n2, we return true;

  // edge cases (after look at the solution), in case n1 == n2
  if (n1 == n2) {
    return true;
  }

  // n1 as our root, do BFS
  let Q = new Queue();
  n1.visited();
  Q.enqueue(n1);

  // we visit the node when we enqueue to the Q
  while(!Q.isEmpty()) {
    let tmp = Q.dequeue();

    tmp.getAdjacent().forEach(node => {
      // check the node, it is inside the forEach to optimize it (because one we know it is connected and put in the queue, we can just directly return true)
      if (tmp == n2) {
        return true;
      }

      if (!node.isVisited()) {
        node.visited();
        Q.enqueue(node);
      }
    });
  }

  return false;
}

// import
const { Node } = require("../../data-structures/graph-node");

// create a graph (n1 n2 connected and n1 n2 not connected)
let n1 = new Node(1);
let n2 = new Node(5);

let g0 = new Node(0);
let g1 = new Node(1);
let g2 = new Node(2);
let g3 = new Node(3);
let g4 = new Node(4);
let g5 = new Node(5);

// the graph roughly looks like the same with page 107
g0.addOneDirection(g1);
g0.addOneDirection(g4);
g0.addOneDirection(g5);

g1.addOneDirection(g3);
g1.addOneDirection(g4);

g2.addOneDirection(g1);

g3.addOneDirection(g4);
g3.addOneDirection(g2);

// node 5 connect to n2
g5.addOneDirection(n2);

// n1 connect to 0
n1.addOneDirection(g0); // uncomment this line to separate n1 and n2

console.log(isConnected(n1, n2));
