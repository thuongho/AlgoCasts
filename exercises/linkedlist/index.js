// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next || null;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let node = this.head;
    let prev = null;
    
    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    this.getLast().next = newNode;
  }

  getAt(idx) {
    if (this.size() <= idx) {
      return null;
    }

    let count = 0;
    let node = this.head;
    while (count < idx) {
      node = node.next;
      count++;
    }
    return node;
  }

  removeAt(idx) {
    if (this.size() <= idx) {
      return null;
    }

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(idx - 1);
    const nextNode = this.getAt(idx + 1);

    if (prevNode) {
      prevNode.next = nextNode;
    }    
  }

  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prevNode = this.getAt(idx - 1) || this.getLast();
    const node = new Node(data, prevNode.next);
    prevNode.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node, count);
      node = node.next;
      count++;
    }
    // if (!this.head) {
    //   return null;
    // }

    // const size = this.size();
    // let idx = 0;
    // while (idx < size) {
    //   fn(this.getAt(idx));
    //   idx++;
    // }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
