function printList(node) {
  let total = "";
  
  if (node == null) {
    return null;
  }

  while(node != null) {
    total += node.value + " -> ";
    node = node.next;
  }

  total = total.slice(0, total.length - 4);
  return total;
}

function printTree(node) {
  let total = "";
  total = [total];
  recursivePrint(node, total);
  return total[0];
}

function recursivePrint(node, total) {
  if (node == null) {
    return;
  }
  total[0] += "(";
  recursivePrint(node.left, total);
  total[0] += " " + node.value + " ";
  recursivePrint(node.right, total);
  total[0] += ")";
}

module.exports = {
  printList,
  printTree
}