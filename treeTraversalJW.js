function Node(value) {
    this.data = value;
    this.left = null;
    this.right = null;
};

let node5 = new Node(5);
let node3 = new Node(3);
let node2 = new Node(2);
let node4 = new Node(4);
let node7 = new Node(7);
let node6 = new Node(6);
let node8 = new Node(8);

node5.left = node3;
node5.right = node7;
node3.left = node2;
node3.right = node4;
node7.left = node6;
node7.right = node8;

let treeRoot = node5;

//return all keys in descending order

function getKeys(tree) {
 let keyArray = [];
 let queue = [tree];
 while (queue.length > 0) {
     let node = queue.shift();
     keyArray.push(node.data);
     if (node.left) {
         queue.push(node.left);
     }
     if (node.right) {
         queue.push(node.right);
     }
 }
 keyArray = keyArray.reverse();
 console.log(keyArray);
 return keyArray;

}

getKeys(treeRoot);

