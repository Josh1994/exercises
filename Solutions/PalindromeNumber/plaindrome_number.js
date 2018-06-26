/*
*  Author:      Josh M
*  Source : https://leetcode.com/problems/plaindrome-number/
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   var reversedNum = parseInt(x.toString().split("").reverse().join(""));
    
    if(x === reversedNum && reversedNum <= Math.pow(2,31) - 1 && reversedNum >= Math.pow(-2,31)){
        return true;
    }
    else{
        return false
    }
};