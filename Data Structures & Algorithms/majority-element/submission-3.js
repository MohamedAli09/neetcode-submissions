class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //  1 1 1 3 3 3 3
    majorityElement(nums) {
        let candidate = nums[0];
        let counter = 1;
        for (let i = 1; i < nums.length; i++) {
            if (counter === 0) {
                candidate = nums[i];
            }
            if (nums[i] === candidate) {
                counter = counter + 1;
            } else if (nums[i] !== candidate) {
                counter = counter - 1;
            }  
        }
        return candidate;
    }
}
