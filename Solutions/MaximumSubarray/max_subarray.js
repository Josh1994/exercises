/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var total = nums[0];
    
    for (var i = 0; i < nums.length; i++) {
        var count = 0;
        
        for (var j = i; j < nums.length; j++) {
            count += nums[j];
            if (count >= total) {
                total = count;
            }
        }
    }
  
    return total;
};