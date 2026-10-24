 
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashSet<Integer> intersection = new HashSet<>();
        HashSet<Integer> seen = new HashSet<>();
        List<Integer> result = new ArrayList<>();

        for (int num : nums1) {
            seen.add(num);
        }

        for (int num : nums2) {
            if (seen.contains(num)) {
                intersection.add(num);
            }
        }

        for (int num : intersection) {
            result.add(num);
        }

        int[] answer = new int[result.size()];

        for (int i = 0; i < result.size(); i++) {
            answer[i] = result.get(i);
        }

        return answer;
    }
}