/*
*  Author:      Josh M
*  Source : https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    if (s.length == 1 || s.length == null){
        return false;
    }
    for(var i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
            stack.push(s[i]);
        }
        else{
            if(!match(stack.pop(), s[i])){
                return false;
            }
        }
    }
    //Check if there are remaining unmatched strings
    if(stack.length == 0){
        return true;
    }
    else{
        return false;
    }
};

function match(pos1, pos2){
    console.log(pos1,pos2);
    if(pos1 == "(" && pos2 == ")"){
        return true;
    }
    else if(pos1 == "[" && pos2 == "]"){
        return true
    }
    else if (pos1 == "{" && pos2 == "}"){
        return true;
    }
    else{
        return false;
    }
        
}