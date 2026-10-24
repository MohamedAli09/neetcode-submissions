class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> set = new HashSet<>();
        boolean isCyclical = false;

        while (true) {
            set.add(n);
            Stack<Integer> stack = seperatedNumbers(n);
            n = resultOfSeperatedNumbers(stack);

            if (n == 1) {
                return true;
            }
            if(set.contains(n)){
                
                break;
            
            }

        }

        return isCyclical;
    }
    public Stack<Integer> seperatedNumbers(int n) {
        Stack<Integer> stack = new Stack<>();
        while (n > 0) {
            stack.push(n % 10);
            n = n / 10;
        }
        return stack;
    }
    public int resultOfSeperatedNumbers(Stack<Integer> stack) {
        int result = 0;

        while (!stack.isEmpty()) {
            result = result + (int) Math.pow(stack.pop(), 2);
        }

        return result;
    }
}
