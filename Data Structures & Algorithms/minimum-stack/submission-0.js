class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        const isMinStackEmpty = !this.minStack.length
        const smallestValue = val <= this.minStack[this.minStack.length - 1]
        const tureOrfalse = isMinStackEmpty || smallestValue;
        if (tureOrfalse) this.minStack.push(val)

    }

    /**
     * @return {void}
     */
    pop() {
        const value = this.stack.pop();
        const isEquel = value === this.getMin();
        if (isEquel) this.minStack.pop();

    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]

    }
}
