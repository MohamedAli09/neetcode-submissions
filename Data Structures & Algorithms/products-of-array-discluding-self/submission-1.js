class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        let productWitoutZero = 1;
        let count = 0;
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            product *= nums[i];
            if (nums[i] != 0) {
                productWitoutZero *= nums[i];

            }else{
                count++
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                arr.push(productWitoutZero);
            } else
                arr.push(product / nums[i]);


        }
         if(count > 1){
            return new Array(nums.length).fill(0);
         }else{
            return arr;
         }

    }
} // 1 2 8 48
