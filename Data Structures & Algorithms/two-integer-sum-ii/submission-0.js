class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
          const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i] ;
            if (map.has(diff)) {
                return [map.get(diff) + 1, i + 1]
            }
            map.set(nums[i], i);



        }




        return [0, 0];
    }
}
