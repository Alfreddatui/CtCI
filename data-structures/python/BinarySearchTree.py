from Node import Node

class BinarySearchTree(object):
  def __init__(self, root = None):
    self.root = root

  def get_root(self):
    # return the root of BST
    return self.root

  def insert(self, data):
    # insert element to BST
    if self.root is None:
      self.root = Node(data)
    else:
      node = self.root
      while node.data is not None:
        if data < node.data:
          if node.left is None:
            node.left = Node(data)
            break
          else:
            node = node.left
        else:
          if node.right is None:
            node.right = Node(data)
            break
          else:
            node = node.right
  
  def findNode(self, data):
    if self.root is None:
      return False
    
    node = self.root    
    while node != None:
      if node == data:
        return True
      elif data < node.data:
        node = node.left
      else:
        node = node.right
  
  def printBST(self):
    self.printNode(self.root)

  def printNode(self, node):
    if node is None:
      return
    print(node.data)
    self.printNode(node.left)
    self.printNode(node.right)
