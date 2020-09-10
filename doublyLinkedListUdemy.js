function makeNode(value) {
    const newNode = {
        value: value,
        next: null,
        prev: null
    };
    return newNode;
}

class NewNode {
    constructor(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
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
            next: null,
            prev: null
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
        newNode.prev = this.tail;
        this.tail = this.tail.next;
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
        this.head.prev = newNode;
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

    insert(index, value) {
        let newNode = makeNode(value);
        let currentNode = myNode.head;

        if (index < 1) {  // handle 0 and negative index the same; insert at head
            this.prepend(value);
        }
        else {
            let currentNode = this.traverseToIndex(index-1);
            if (currentNode === this.tail || currentNode.next === null) {
                this.append(value);
            }
            else {
                let nextNode = currentNode.next;
                newNode.next = nextNode;
                newNode.prev = currentNode;
                currentNode.next = newNode;
                nextNode.prev = newNode;
                this.length++;
            }
        }
        return this.head;
    }

    remove(index) {
        // delete head if index 0 or less
        // delete nothing if index is greater than tail/length
        if (index < 1) {
            this.head = this.head.next;
            this.length--;
        } else {
            let previousNode = this.traverseToIndex(index-1);
            // if previousNode = tail, (next = null)
            if (previousNode.next !== null) {
                previousNode.next = previousNode.next.next;
                if (previousNode.next !== null) {
                    previousNode.next.prev = previousNode;
                }
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