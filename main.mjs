import { createBinarySearchTree } from "./BinarySearchTree.mjs";

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = createBinarySearchTree(arr);

tree.insert(10);
tree.insert(345);
tree.insert(500);
tree.insert(600);
tree.insert(700);
tree.insert(800);
tree.insert(900);
tree.rebalance();
console.log(tree.isBalanced());

console.log(tree.height(tree.root()));
console.log(tree.depth(tree.find(8)));
tree.prettyPrint(tree.root());
tree.prettyPrint();

