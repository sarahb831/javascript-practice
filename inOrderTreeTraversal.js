function Node(value) {
    this.val = value;
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
let node1 = new Node(1);

node5.left = node3;
node5.right = node7;
node3.left = node2;
node3.right = node4;
node7.left = node6;
node7.right = node8;
node2.left = node1;

let treeRoot = node5;

var preorderTraversal = function(root) {
      
    if (root === null) return [];
    /*
    // iterative version
    let array = [];
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();
        array.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);    
    }
    */
    // recursive version
    var preorder = function(node, array=[]) {
        if (node===null) return [];
        array.push(node.val);
        if (node.left) preorder(node.left, array);
        if (node.right) preorder(node.right, array);
        return array;
    }
    return preorder(root);
    
};

function postOrderTreeTraversal(treeRoot) {
    if (treeRoot === null) return [];

    function postOrder(node, array=[]) {
        if (node===null) return [];
        if (node.left) postOrder(node.left, array);
        if (node.right) postOrder(node.right, array);
        array.push(node.val);
        return array;
    }

    return postOrder(treeRoot);
}

function postOrderIterative(treeRoot) {
    if (treeRoot === null) return [];
    let stack1 = [treeRoot];
    let stack2 = [];
    while (stack1.length > 0) {
        let node = stack1.pop();
        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
        stack2.push(node.val);
    }
    console.log('stack2',stack2)
    let result = new Array(stack2.length);
    for (let i = 0; i < stack2.length; i++) {
        result[i] = stack2.pop();
        console.log('i',i,result)
    }
    return result;
};

function inOrderTreeTraversal(treeRoot) {
    if (treeRoot===null) return [];

    function inOrder(node, array=[]) {
        if (node===null) return array;
        if (node.left) inOrder(node.left, array);
        array.push(node.val);
        if (node.right) inOrder(node.right, array);
        return array;
    }
    return inOrder(treeRoot);
}

console.log("in order:", inOrderTreeTraversal(treeRoot));
console.log("pre order:", preorderTraversal(treeRoot));
console.log('post order recursive:', postOrderTreeTraversal(treeRoot));
console.log('FIX THIS: post order iterative:', postOrderIterative(treeRoot));