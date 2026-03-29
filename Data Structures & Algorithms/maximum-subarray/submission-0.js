class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length
        let sum = 0
        let maxSum = -Infinity

        for(let i =0; i<n; i++){
            sum += nums[i]
            maxSum = Math.max(sum, maxSum)

            if(sum < 0){
                sum = 0
            }
        }
        return maxSum
    }
}
