class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = "";
        let firstString = strs[0];
       
        let counter = 0;
        for (let i = 0; i < firstString.length; i++) {
            let charOfFirstString = firstString[i];
             
            for (let j = 1; j < strs.length; j++) {
                let otherStrings = strs[j];

                if(charOfFirstString !== otherStrings[i] ){
                    return result
                }
               
            }
            result = result + charOfFirstString;
        }
        return result;
    }
}
