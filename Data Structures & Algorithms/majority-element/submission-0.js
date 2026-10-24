class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }
         
        let compare = 0;
        let result = 0;
        map.forEach((value, key) => {
            if(value > compare){
                compare = value
                result = key;
            }
        });
        return result;
    }
}
