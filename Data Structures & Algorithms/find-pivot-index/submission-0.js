class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let n = nums.length
        let sum = 0

        for(let i =0; i<n; i++){
            sum+= nums[i]
        }
        let leftSum = 0
        for(let i =0; i<n; i++){
            let rightSum = sum - leftSum - nums[i]

            if(leftSum === rightSum) return i
            else leftSum += nums[i]
        }
        return -1
    }
}
