class Solution {
    public int subarraySum(int[] nums, int k) {
        int counter = 0;
        for (int i = 0; i < nums.length; i++) {
            int sum = nums[i];

            for (int j = i; j < nums.length; j++) {
                if (j != i) {
                    sum += nums[j];
                }
                if (sum == k) {
                    counter++;
                }
            }
        }
        return counter;
    }
}
