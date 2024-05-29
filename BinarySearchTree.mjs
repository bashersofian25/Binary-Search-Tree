import { createNode } from "./Node.mjs";
export const createBinarySearchTree = (inputArr) => {

    const buildTree = (arr) => {
        
        let root = createNode(null, null, arr[parseInt(arr.length/2)]);
        if (arr.length == 2){
            root.left = buildTree(arr.slice(0, 1));

        }else if(arr.length > 3){
            const leftSubArr = arr.slice(0, arr.length/2);
            const rightSubArr = arr.slice(arr.length/2 +1 , arr.length);
            root.right = buildTree(rightSubArr);
            root.left = buildTree(leftSubArr);
        }
        return root;
    };

    const removeDuplicates = (arr) => {
        return arr.filter((value, index) => arr.indexOf(value) === index);
    };



    const sortedUniqueArray = (arr) => {
        arr.sort((a, b) => {return a - b});
        return removeDuplicates(arr);

    };


    let arr = sortedUniqueArray(inputArr);
    const _root = buildTree(arr);

    const insert = (value) => {
        let currentNode = _root;
        while (true){
            if(currentNode.value < value){
                if(currentNode.right !== null){
                    currentNode = currentNode.right;
                }else{
                    currentNode.right = createNode(null, null,value);
                    currentNode = currentNode.right;
                    break;
                }   
            }
            else if(currentNode.value >= value){
                if(currentNode.left !== null){
                    currentNode = currentNode.left;
                }else{
                    currentNode.left = createNode(null, null,value);
                    currentNode = currentNode.left;
                    break;
                }
            }
            
        }
    };




    const prettyPrint = (node = _root, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };


    

    const find = (value) => {
        let currentNode = _root;
        while (true) {
            if(currentNode === null) {
                return null;
            }else if(currentNode.value === value){
                return currentNode;
            }else if (currentNode.value > value) {
                currentNode = currentNode.left;
            }else if (currentNode.value < value) {
                currentNode = currentNode.right;
            }
        }
    };

    const handelNulls = (root) => {
        if(root === null) {
            return;
        }
        let right = root.right;
        let left = root.left;

        if(right !== null){
            if(right.value === null){
                root.right = null;
            }
        }
        if(left !== null){
            if(left.value === null){
                root.left = null;
            }
        }
        handelNulls(right);
        handelNulls(left);
    };

    const changeRootOfSubTree = (root) => {
        if(root.right === null && root.left === null){
            root.value = null;
            return;
        }
        else if(root.right === null){
            root.value = root.left.value;
            changeRootOfSubTree(root.left);
        }else if (root.left === null){
            root.value = root.right.value;
            changeRootOfSubTree(root.right);
        }else {
            if(root.right.right === null){
                root.value = root.left.value;
                changeRootOfSubTree(root.left);
            }else if (root.left.left === null) {
                root.value = root.right.value;
                changeRootOfSubTree(root.right);
            }else {
                root.value = root.right.value;
                changeRootOfSubTree(root.right);
            }
        }

    };

    const remove = (value) => {
       let node = find(value);
       changeRootOfSubTree(node);
       handelNulls(_root);
    };

    

    const inOrder = (callBack = (value) => {}, node = _root) => {
        let arr = [];
        const left = node.left;
        const right = node.right;
        if(left !== null) {
            const leftArr = inOrder(callBack, left);
            arr = arr.concat(leftArr);
        }
        callBack(node.value);
        arr.push(node.value);
        if(right !== null) {
            const rightArr = inOrder(callBack, right);
            arr = arr.concat(rightArr);
        }
        return arr;
    };

    const preOrder = (callBack = (value) => {}, node = _root) => {
        let arr = [];
        const left = node.left;
        const right = node.right;
        callBack(node.value);
        arr.push(node.value);
        if(left !== null) {
            const leftArr = preOrder(callBack, left);
            arr = arr.concat(leftArr);
        }
        if(right !== null) {
            const rightArr = preOrder(callBack, right);
            arr = arr.concat(rightArr);
        }
        
        return arr;

    };


    const postOrder = (callBack = (value) => {}, node = _root) => {
        let arr = [];
        const left = node.left;
        const right = node.right;
        if(left !== null) {
            const leftArr = postOrder(callBack, left);
            arr = arr.concat(leftArr);
        }
        if(right !== null) {
            const leftArr = postOrder(callBack, left);
            arr = arr.concat(leftArr);
        }
        callBack(node.value);
        arr.push(node.value);
        return arr;
    };

    const levelOrder = (callBack = (value) => {}) => {
        // need to use a Queue in this one, to keep reference
        // using unshift and pop functions we can simulate a queue
        const arr = [_root];
        while (arr.length > 0) {
            const visitedNode = arr.pop();
            callBack(visitedNode.value);
            if(visitedNode.left !== null){
                arr.unshift(visitedNode.left);
            }
            if(visitedNode.right !== null){
                arr.unshift(visitedNode.right);
            }
        }

    };

    const height = (node) => {

    };

    const depth = (node) => {

    };

    const isBalanced = () => {

    };

    const rebalance = () => {
        // need to make traversal methods return an array to implement this
    };

    
    return {prettyPrint, insert, remove, find, inOrder, postOrder, preOrder, isBalanced, rebalance, height, depth, levelOrder};
}