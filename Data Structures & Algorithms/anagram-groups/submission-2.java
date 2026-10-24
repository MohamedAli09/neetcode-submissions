class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> map = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            String word = strs[i];
            char[] Characters = word.toCharArray();
            Arrays.sort(Characters);
            String sortedWord = new String(Characters);
            if (map.containsKey(sortedWord)) {
                map.get(sortedWord).add(strs[i]);
            } else {
                map.put(sortedWord, new ArrayList<>());
                map.get(sortedWord).add(strs[i]);
            }
        }
       List<List<String>> result = new ArrayList<>();
        map.forEach((k, v) -> {
            result.add(v);
        });
        return result;
        

    }
}
