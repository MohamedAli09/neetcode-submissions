class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        for (let i = 0; i < operations.length; i++) {
            if(operations[i] === "+"){
                let x = parseInt(stack[stack.length-1]) + parseInt(stack[stack.length-2]);
                stack.push(x);
            }else if(operations[i] === "D"){
                stack.push(stack[stack.length-1] * 2);
            }else if(operations[i] === "C"){
                stack.pop();
            }else{
                stack.push(parseInt(operations[i]))
            }
        }
        let counter = 0 ;
        for(let i = 0 ; i < stack.length; i++){
            counter+= stack[i];
        }
        return counter;
    }
}
