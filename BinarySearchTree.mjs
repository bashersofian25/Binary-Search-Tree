import { createNode } from "./Node.mjs";
export const createBinarySearchTree = (inputArr) => {

    const buildTree = (arr) => {
        
        const root = createNode(null, null, arr[parseInt(arr.length/2)]);
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
        console.log(removeDuplicates(arr));
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
    
    


    const remove = () => {

    };

    const find = (value) => {
        let currentNode = _root;
        while (true) {
            if(currentNode === null) {
                return null;
            }else if(currentNode.value === value){
                return currentNode;
            }else if (currentNode.value > value) {
                console.log("left:",currentNode.value);
                currentNode = currentNode.left;
            }else if (currentNode.value < value) {
                console.log("right:",currentNode.value);

                currentNode = currentNode.right;
            }
        }
    };

    const inOrder = (callBack) => {

    };

    const preOrder = (callBack) => {

    };

    const postOrder = (callBack) => {

    };

    const height = () => {

    };

    const depth = () => {

    };

    const isBalanced = () => {

    };

    const rebalance = () => {

    };

    
    return {prettyPrint, insert, remove, find};
}