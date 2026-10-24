class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (const key of nums) {
            if (map.get(key)) {
                let count = map.get(key);
                count++;
                map.set(key, count);
            } else {
                map.set(key, 1);
            }
        }
        const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
        let arr = [];
        for (const iterator of sortedMap) {
            if (!k) break;
            arr.push(iterator[0])

            k--;
        }
        return arr;

    }
}
