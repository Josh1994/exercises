/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/* Recursive way of solving symmetric tree */
var isSymmetric = function(root) {
    if(!root) {return true;}
    function similar(nodeL, nodeR){
        if(!nodeL && !nodeR) {return true;}
        if(!nodeL || !nodeR || nodeL.val !== nodeR.val) {return false;}
        return similar(nodeL.left, nodeR.right) && similar(nodeL.right, nodeR.left);
    }
    return similar(root.left, root.right);    
};