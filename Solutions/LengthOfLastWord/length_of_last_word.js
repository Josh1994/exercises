/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var stringArray = s.trim().split(" ");
    return stringArray[stringArray.length-1].length;
};