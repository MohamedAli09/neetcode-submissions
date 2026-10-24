class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let number = nums[i];
            if (map.get(number)) {
                return true;
            } else {
                map.set(number, 1);
            }
        }
        return false;

    }
}
