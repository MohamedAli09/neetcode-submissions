class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let result = 0;
        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                counter = counter + 1;
                result = Math.max(result, counter);
            } else {
                counter = 0;
            }

        }
        return result
    }
}
