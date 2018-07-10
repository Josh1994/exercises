/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == null) return;
    
    for(var i = 0; i < nums.length; ){
        if(nums[i] == nums[i+1]){
            nums.splice(i,1);
        }
        else{ // >
            i++;
        }
    }
    return nums.length;
};