class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let result = 0;
        for (let i = 1; i <= s.length - 1; i++) {
            let after = s[i]
            let before = s[i - 1]
            result = result + (Math.abs(after.charCodeAt(0) - before.charCodeAt(0)))


        }
        return result;
    }

}
