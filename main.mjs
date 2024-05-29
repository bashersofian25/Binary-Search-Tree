import { createBinarySearchTree } from "./BinarySearchTree.mjs";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createBinarySearchTree(arr);

const callBack = (value) => {console.log(value);};
tree.levelOrder(callBack);
tree.prettyPrint();

