# List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with detph D, you'll have D linked list)

class LLNode:
  def __init__(self, data):
    self.data = data
    self.next = None

class Node:
  def __init__(self, data):
    self.left = None
    self.right = None
    self.data = data

  def PrintTree(self):
    print(self.data)


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

# answer
def ListOfDepths(arr, level, node):
  if node is None:
    return
  if node.data is None:
    return
  ln = len(arr)

  while level + 1 > len(arr):
    arr.append(None)

  # create a new Linked list node
  LlistNode = LLNode(node.data)

  # go until the end of the linked list
  Lnode = arr[level]
  if Lnode is None:
    arr[level] = LlistNode
  else:
    while Lnode.next != None:
      print("WOW")
      Lnode = Lnode.next
    Lnode.next = LlistNode
  
  ListOfDepths(arr, level + 1, node.left)
  ListOfDepths(arr, level + 1, node.right)
  

def printLinkedList(node):
  if node is None:
    return
  while node != None:
    print(node.data, end=" -> ")
    node = node.next
  print()

# defining problems
BST = BinarySearchTree()
BST.insert(31)
BST.insert(25)
BST.insert(52)
BST.insert(21)
BST.insert(46)
BST.insert(67)
BST.insert(14)
BST.insert(44)
BST.insert(82)

root = BST.get_root()
arr = []

ListOfDepths(arr, 0, root)
print(arr)
for i in arr:
  printLinkedList(i)