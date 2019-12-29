// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(item) {
    this.stackOne.push(item);
  }

  remove() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }
    const removeItem = this.stackTwo.pop();
    // restore original stack
    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return removeItem;
  }

  peek() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    const peekItem = this.stackTwo.peek();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }
    return peekItem;
  }
}

module.exports = Queue;
