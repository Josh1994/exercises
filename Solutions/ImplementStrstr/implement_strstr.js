/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) { //No indexOf
    if(needle == "") return 0;
    
    if(haystack.includes(needle)){
        return haystack.search(needle);
    }
    else{
        return -1;
    }
};

var strStr = function(haystack, needle) { 
    if(needle == "") return 0;
    
    return haystack.indexOf(needle)
};