import { createNode } from "./Node.mjs";
export const createBinarySearchTree = (arr) => {
    const root = buildTree(arr);
    const buildTree = (arr) => {
        const root = createNode(null, null , null);
    };

    const insert = (value) => {

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

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}