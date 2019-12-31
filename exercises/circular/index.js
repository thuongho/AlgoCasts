// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// input singly linked list output boolean
function circular(list) {
  // check input
  // check if head next next is null return false
  if (!list || !list.head || !list.head.next || !list.head.next.next) {
    return false;
  }
  // ref slow pointer that points to head
  let slow = list.head;
  // ref fast pointer that points to head.next next
  let fast = slow.next.next;
  // while loop the runs until next of slow or fast is null
  while (fast.next && fast.next.next) {
    // check if slow is the same as fast return true
    if (slow === fast) {
      return true;
    }
    // increment slow by one next
    slow = slow.next;
    // increment fast by two next
    fast = fast.next.next;
  }
  // return false
  return false;
} // O(n) time O(1) space

module.exports = circular;
