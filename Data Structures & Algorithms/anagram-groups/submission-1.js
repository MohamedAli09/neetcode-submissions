class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = [];
        for (let str of strs) {
            let key = [...str].sort().join('');
            if(map[key] === undefined){
                map[key] = [];
            }
           map[key].push(str);

        }
        return Object.values(map);
    }
}
