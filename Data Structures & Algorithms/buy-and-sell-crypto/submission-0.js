class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length
        let buyPrice = prices[0]
        let profit = 0

        for(let i =0; i<n; i++){
            if(prices[i] < buyPrice){
                buyPrice = prices[i]
            }
            if(profit < prices[i] - buyPrice){
                profit = prices[i] - buyPrice
            }
        }
        return profit
    }
}
