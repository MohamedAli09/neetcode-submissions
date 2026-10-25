class Solution {
    public void moveZeroes(int[] nums) {
        int ZeroPosition = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                while (ZeroPosition < i && nums[ZeroPosition] != 0) {
                    ZeroPosition++;
                }
                if (nums[ZeroPosition] == 0) {
                    nums[ZeroPosition] = nums[i];
                    nums[i] = 0;
                }
            }
        }
    }
}
