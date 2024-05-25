import { createBinarySearchTree } from "./BinarySearchTree.mjs";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createBinarySearchTree(arr);
tree.prettyPrint();

tree.insert(90);
tree.insert(901);
tree.insert(902);
tree.insert(903);
tree.insert(904);
tree.insert(905);
tree.insert(906);
tree.insert(907);
tree.insert(908);

tree.prettyPrint();

