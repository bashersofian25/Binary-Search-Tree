import { createBinarySearchTree } from "./BinarySearchTree.mjs";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createBinarySearchTree(arr);

tree.remove(67);
tree.remove(1);
tree.remove(4);



tree.prettyPrint();

