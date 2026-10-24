class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length ;
        let res = [];
        let prefix = []; prefix[0] = nums[0];
        let posfix = []; posfix[n-1] = nums[n-1];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i] * prefix[i-1]
            posfix[n-i-1] = posfix[n-i] * nums[n-i-1];

        }

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = posfix[i+1]
            } else if (i === n-1) {
                res[i] = prefix[n-2]
            } else {
                res[i] = prefix[i-1] * posfix[i+1]
            }


        }

        return res

    }
}  
 