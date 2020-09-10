const { join } = require("path");

function makeNode(value) {
    const newNode = {
        value: value,
        next: null
    };
    return newNode;
}

class NewNode {
    constructor(value) {
        const newNode = {
            value: value,
            next: null
        };
        /* alternate approach:
        // this.value = value;
        // this.next = null;
        */
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        //const newNode = new NewNode(value);
        const newNode = makeNode(value);
        /*const newNode = {
            value: value,
            next: null
        };
        */
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this; // needed?
    }

    prepend(value) {
        //const newNode = new NewNode(value);
        const newNode = makeNode(value);
        /* const newNode = {
            value: value,
            next: null
        };
        */
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        
    }

    printList() {
        let currentNode = this.head;
        let array = [];
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('List:', array);
        console.log('head:', this.head.value, this.head.next.value, "; tail:", this.tail.value, this.tail.next);
    }

    traverseToIndex(index) {
        // return head if index is 0 or less
        // return tail if index is past tail
        
        if (index < 1) return this.head;

        let currentNode = this.head;
        let i = 0;
        while (currentNode.next !== null && i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;
    }

    reverse() {
        if (this.head === null || this.head.next === null) return this.head;
        let p1 = this.head.next;
        let p2 = this.head;
        p2.next = null;
        
        let temp = p1;
        while (p1.next) {
            p1 = p1.next;
            temp.next = p2;
            p2 = temp;
            temp = p1;
        }
        temp.next = p2;
        this.tail = this.head;
        this.head = temp;
        return this.head;
    }

    betterReverse() {
        if (this.head === null || this.head.next === null) { return this.head; }
        let p1 = this.head.next;
        let p2 = this.head;
        while (p1 !== null) {
            let temp = p1.next;
            p1.next = p2;
            p2 = p1;
            p1 = temp;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head = p2;
        return this.head;
    }

    insert(index, value) {
        let newNode = makeNode(value);
        let currentNode = myNode.head;

        if (index < 1) {  // handle 0 and negative index the same; insert at head
            this.prepend(value);
        }
        else {
            let i = 0;
            while (i < index - 1 && currentNode.next !== null) {
                currentNode = currentNode.next;
                i++;
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.length++;
        // adjust tail if newNode added at end
        if (newNode.next === null) {
            this.tail = newNode;
        }
        return this.head;
    }

    remove(index) {
        // delete head if index 0 or less
        // delete nothing if index is greater than tail/length
        if (index < 1) {
            this.head = this.head.next;
            this.length--;
        }
        else {
        let previousNode = this.traverseToIndex(index-1);
        // if previousNode = tail, (next = null)
            if (previousNode.next !== null) {
                previousNode.next = previousNode.next.next;
                this.length--;
            }
        }
        return this.head;
    }
}

let myNode = new LinkedList(10);
myNode.append(5);
myNode.append(16);
myNode.prepend(1);
myNode.insert(2, 99);
//console.log(myNode);
myNode.insert(8, 20);
myNode.insert(0,12);
myNode.printList();
myNode.remove(0);
myNode.printList();
myNode.reverse();
myNode.printList();
myNode.betterReverse();
myNode.printList();