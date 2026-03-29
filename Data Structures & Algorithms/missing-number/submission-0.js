class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let actualSum = n*(n+1)/2
        let sum = 0
        for(let i =0; i<n; i++){
            
            sum += nums[i]
        }
        return actualSum - sum
    }
}
