class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let n = nums.length
        let minL = Infinity
        let i = 0, j = n-1
        let sum = 0

        for(let j = 0; j<n; j++){
            sum += nums[j]
            while(sum >= target){
                minL = Math.min(minL,j-i+1)
                sum -= nums[i]
                i++
            }
        }
        if(minL === Infinity) return 0
        return minL
    }
}
