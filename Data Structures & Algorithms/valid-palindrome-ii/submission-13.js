class Solution {
    validPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            if (s[start] !== s[end]) {
                return this.isPalindrome(s, start + 1, end) || this.isPalindrome(s, start, end - 1);
            }
            start++;
            end--;
        }

        return true;
    }

    isPalindrome(s, start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }

            start++;
            end--;
        }

        return true;
    }
}
