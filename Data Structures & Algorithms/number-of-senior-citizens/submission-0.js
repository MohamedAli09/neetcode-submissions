class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let counter = 0;
        for (let i = 0; i < details.length; i++) {
            const passagner = details[i];
            const age = Number((passagner[11] + passagner[12]))
            if (age > 60) counter++;

        }
        return counter;
    }
}
