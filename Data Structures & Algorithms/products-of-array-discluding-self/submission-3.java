class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] leftProducts = new int[nums.length];
        int[] rightProducts = new int[nums.length];

        rightProducts[nums.length - 1] = 1;
        leftProducts[0] = 1;
        for (int i = 1; i < nums.length; i++) {
            leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
        }
        for (int i = nums.length - 2; i >= 0; i--) {
            rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
        }
        for(int i = 0; i < nums.length; i++){
            nums[i] = leftProducts[i] * rightProducts[i];
        }

        return nums;
    }
}
// 1  2  4  6
//[1, 1, 2, 8]
//[48, 24, 6, 1]

// 6 2 3
// 6