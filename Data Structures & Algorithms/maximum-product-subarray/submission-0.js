class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let n = nums.length
        let max = -Infinity

        for(let i =0; i<n; i++){
            let prod = 1

            for(let j = i; j<n; j++){
                prod *= nums[j]

                max = Math.max(prod, max)
            }
        }
        return max
    }
     
}
