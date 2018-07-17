/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var maxLength = Math.max (a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    var sum = 0;
    var remainder = 0;
    var result = ""
    console.log(maxLength);
    for(var i = maxLength-1; i >= 0; i--){
        sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + remainder;
        remainder = sum >= 2 ? 1:0;
        console.log(remainder+"  "+sum);
        if(sum > 2 || sum == 1){result += "1";}
        else{result += "0";}
    }
    if(remainder != 0){result+= "1"}
    result = result.split("").reverse().join("");
    
    return result;
};