// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

module.exports = fromLast;


// // input list, n output node
// function fromLast(list, n) {
//   // ref slow head
//   let slow = list.head;
//   // ref fast head
//   let fast = slow;
//   // advance fast n next
//   while (n > 0) {
//     fast = fast.next;
//     n--;
//   }
//   // increment slow and fast until fast reaches the end
//   while (fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   // return slow
//   return slow;
// } // O(n) time O(1)