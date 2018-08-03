/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var duplicate="No";
    var num=0;
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i]==nums[j] && i!=j){
                duplicate="Yes";
                break;
            }
        }
        if(duplicate=="No"){
            num = nums[i];
            return num;
        }
        duplicate="No";
    }

};