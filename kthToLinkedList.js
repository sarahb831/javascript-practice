// Jack Wong meetup 200830
// returns kth from end item

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

function kthToLinkedList(node, k) {
    let dummy = new ListNode();
    dummy.next = node;
    let p1 = dummy;
    let p2 = dummy;

    // doesn't check for valid k

    // offset p1 and p2 with k nodes between them
    for (let i = 0; i <= k; i++) {
        p1 = p1.next;
    }

    while (p1) {
        p1 = p1.next;
        p2 = p2.next;
    }

    // to delete kth from end node:
    // p2.next = p2.next.next;
    // return dummy.next;

    return p2.next.val;
}

let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
let head = n1;

console.log(kthToLinkedList(head, 2));
