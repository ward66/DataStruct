class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(data) {
    let node = new Node(data);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

let list = new LinkedList();
list.insert(1);
list.insertAtEnd(2);
console.log(list);
