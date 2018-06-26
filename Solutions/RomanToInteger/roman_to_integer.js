/*
*  Author:      Josh M
*  Source : https://leetcode.com/problems/roman-to-integer/
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var total = 0;
    var current = 0;
    var nextNumber = 0;
    var romanArray = s.split("");
    for(var i = 0; i < romanArray.length; i++){
        current = convertToValue(romanArray[i]);
        nextNumber = convertToValue(romanArray[i+1]);
        if(current == 1 && (nextNumber == (5) || nextNumber == (10))){
            total += (nextNumber - current);
            i++;
        }
        else if(current == 10 && (nextNumber == (50) || nextNumber == (100))){
            total += (nextNumber - current);
            i++;            
        }
        else if(current == 100 && (nextNumber == (500) || nextNumber == (1000))){
            total += (nextNumber - current);
            i++;                   
        }
        else{
            total += current;
        }

    }
    return total;
};

function convertToValue(s){
    var value = 0;
    switch (s){
            case "I":
                value = 1;
                break;
            case "V":
                value = 5;
                break;
            case "X":
                value = 10;
                break;
            case "L":
                value = 50;
                break;
            case "C":
                value = 100;
                break;
            case "D":
                value = 500;
                break;
            case "M":
                value = 1000;
                break;
    }
    return value;
}