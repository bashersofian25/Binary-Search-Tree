import { createNode } from "./Node.mjs";
export const createBinarySearchTree = (inputArr) => {

    const removeDuplicates = (arr) => {
        return arr.filter((value, index) => arr.indexOf(value) === index);
    };
    const sortedUniqueArray = (arr) => {
        arr.sort((a, b) => {return a - b});
        return removeDuplicates(arr);

    };
    let arr = sortedUniqueArray(inputArr);
    console.log(arr);
    const _root = createNode(null, null, arr[arr.length/2]);
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
    const buildTree = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            insert(arr[i]);
        }
        return _root;
    };
    buildTree(arr);



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

    const find = () => {

    };

    const inOrder = (callBack) => {

    };

    const preOrder = (callBack) => {

    };

    const postOrder = (callBack) => {

    };

    const height = () => {

    };

    
    return {prettyPrint, insert};
}