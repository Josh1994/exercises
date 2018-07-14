/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(var i = digits.length-1; i >= 0; i--){
        if(digits[i] >= 9){
            digits[i] -= 9;
        }
        else{
            digits[i]++;
            return digits;
        }
    }
    //9 is in the start
    digits.unshift(1);
    return digits;
};