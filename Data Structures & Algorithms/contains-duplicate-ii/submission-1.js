class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                //
                if (Math.abs(map.get(nums[i]) - i) <= k) return true;
                else {
                    map.set(nums[i], i);
                }
            } else {
                map.set(nums[i], i); /// 1 = 0 0 = 1
            }
        }
        return false;
    }
}
