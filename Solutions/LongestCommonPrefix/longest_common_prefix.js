/*
*  Author:      Josh M
*  Source : https://leetcode.com/problems/longest-common-prefix/
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == null || strs.length == 0){
        return ""
    }
    
    var firstWord = strs[0];
    
    for (var i = 0; i < strs.length; i++){ //array loop
        var j = 0;
        for(; j < firstWord.length; j++){ //for each letter in first word
            if(firstWord.charAt(j)!= strs[i].charAt(j)){  
                break;
            }
        }
        firstWord = firstWord.slice(0,j);
    }
    return firstWord;
};
