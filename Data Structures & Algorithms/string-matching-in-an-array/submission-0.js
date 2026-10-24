class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let result = [];
        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words.length; j++) {
                if (i !== j && words[i].length < words[j].length) {
                    if (words[j].includes(words[i])) {
                        result.push(words[i])
                        break;
                        
                    }
                }
            }
        }
        return result;
    }
}

//mass as hero superhero
