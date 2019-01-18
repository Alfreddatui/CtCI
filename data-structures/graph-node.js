class Node {
  constructor(value) {
    this.value = value;
    this.visit = false;
    this.adjacent = [];
  }

  addOneDirection(node) {
    this.adjacent.push(node);
  }

  addBothDirection(node) {
    this.adjacent.push(node);
    node.addOneDirection(this);
  }

  getAdjacent() {
    return this.adjacent;
  }

  visited() {
    this.visit = true;
  }

  isVisited() {
    return this.visit;
  }
}

module.exports = {
  Node
};
