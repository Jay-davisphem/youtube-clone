class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):

        # allocate memory for newNode and assign data to newNode
        new_node = Node(data)

        # assign null to next of newNode (already done in constructor)

        # if the linked list is empty, make the newNode as head node
        if self.head is None:
            self.head = new_node
            return

        # store the head node temporarily (for later use)
        temp = self.head

        # if the linked list is not empty, traverse to the end of the linked list
        while temp.next:
            temp = temp.next

        # now, the last node of the linked list is temp

        # assign next of the last node (temp) to newNode
        temp.next = new_node

        # assign prev of newNode to temp
        new_node.prev = temp
        self.tail = new_node
        return

    # print the doubly linked list
    def printList(self):
        lis = []
        node = self.head
        while node:
            lis.append(node.data)
            last = node
            node = node.next
        return lis

    def print_rev(self):
        lis = []
        node = self.tail
        while node:
            lis.append(node.data)
            first = node
            node = node.prev
        return lis


# initialize an empty node
dll = DoublyLinkedList()
dll.append(5)
dll.append(1)
dll.append(6)
dll.append(9)
dll.append(5)
dll.append(1)
dll.append(6)
dll.append(9)
dll.append(4566)
print(dll.printList())
print(dll.print_rev())
