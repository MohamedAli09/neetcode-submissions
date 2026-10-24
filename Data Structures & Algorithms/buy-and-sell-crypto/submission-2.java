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