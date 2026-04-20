**Masala:**
Tenglashtirish algoritmi

**Kod:**
```javascript
import { type } from 'typescript';

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  append(value: number): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  findMiddle(): number | null {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow ? slow.value : null;
  }
}

function findMiddle(head: Node | null): number | null {
  const linkedList = new LinkedList();
  let current = head;
  while (current) {
    linkedList.append(current.value);
    current = current.next;
  }
  return linkedList.findMiddle();
}

// Test case lar
console.log(findMiddle(null)); // null
console.log(findMiddle({ value: 1 })); // 1
console.log(findMiddle({ value: 1, next: { value: 2 } })); // 1
console.log(findMiddle({ value: 1, next: { value: 2, next: { value: 3 } } })); // 2
console.log(findMiddle({ value: 1, next: { value: 2, next: { value: 3, next: { value: 4 } } } })); // 2
console.log(findMiddle({ value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5 } } } } })); // 3
```
**Time va space complexity:**
- Time complexity: O(n), where n is the number of elements in the linked list.
- Space complexity: O(n), where n is the number of elements in the linked list.
