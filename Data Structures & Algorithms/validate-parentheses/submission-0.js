class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

         let start = 0;
        for (let i = 0; i < s.length; i++) {
            if (stack.length) {
                if (
                    (stack[stack.length - 1] == "(" && s[i] == ")") ||
                    (stack[stack.length - 1] == "[" && s[i] == "]") ||
                    (stack[stack.length - 1] == "{" && s[i] == "}")
                )
                    stack.pop();
                else {
                    stack.push(s[i]);
                }
            } else {
                stack.push(s[i]);
            }
        }
    if(stack.length) return false;
    else return true;

    }
}
