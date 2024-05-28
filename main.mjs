import { createBinarySearchTree } from "./BinarySearchTree.mjs";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createBinarySearchTree(arr);


tree.remove(67);
tree.remove(1);
tree.remove(6345);
tree.remove(23);
tree.insert(15);
tree.remove(324);
tree.remove(8);
tree.prettyPrint();

