import { Graph, Node } from "dijkstra-pathfinder";

const graph = new Graph();

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");
const F = new Node("F");

graph.addArc(A, B, 5);

graph.addArc(B, A, 5);
graph.addArc(B, C, 7);
graph.addArc(B, D, 3);

graph.addArc(C, B, 7);
graph.addArc(C, E, 4);

graph.addArc(D, B, 3);
graph.addArc(D, E, 10);
graph.addArc(D, F, 8);

graph.addArc(E, C, 4);
graph.addArc(E, D, 10);

graph.addArc(F, D, 8);

export { graph };
