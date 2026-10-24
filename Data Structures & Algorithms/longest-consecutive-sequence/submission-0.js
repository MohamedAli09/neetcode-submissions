class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let set = new Set();
        let maxx = 0;
        for (const iterator of nums) {
            set.add(iterator);
        }
        let arr = Array.from(set);
        arr.sort((a, b) => a - b);
        console.log(arr);
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            // Count occurrences of current character
            let count = 1;
            while (i < n - 1 && arr[i] - arr[i + 1] == -1) {
                count++;
                i++;
            }

            maxx = Math.max(maxx, count);
        }

        return(maxx);
    }
}
