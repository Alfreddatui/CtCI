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

module.exports = {
  printList
}