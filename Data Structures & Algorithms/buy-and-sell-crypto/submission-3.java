class Solution {// 1 10 20 
    public int maxProfit(int[] prices) {
            int pastPrice = prices[0];
            int profit = 0;
            for(int i = 1 ; i < prices.length; i++){
               if(prices[i] < pastPrice){
                 pastPrice = prices[i];
               }else{
                 profit = Math.max((prices[i] - pastPrice) , profit);
               }
            }
            return profit;
    }
}
//1 90 0 30 50

//I will remember the profit in past days, and if I encounter a price that is smaller than I discovered, this means I have a new possibility of getting more maximum profit than I discovered and Finding a cheaper price doesn't mean you've found a better profit.