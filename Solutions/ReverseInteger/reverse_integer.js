/*
*  Author:      Josh M
*  Source : https://leetcode.com/problems/two-sum/
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reversedNum = 0;
    
    if(x != 0){
       reversedNum = parseInt(x.toString().split("").reverse().join(""));
        if(reversedNum > Math.pow(2,31) - 1 || reversedNum < Math.pow(-2,31)){
            reversedNum = 0;
        }
    }

    if (x > 0){
        return reversedNum;
    }
    else{
        return -reversedNum;    
    }
    
    
};