class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        t = t.split('').sort().join('')
        s = s.split('').sort().join('')
        return s == t;

    }
}
