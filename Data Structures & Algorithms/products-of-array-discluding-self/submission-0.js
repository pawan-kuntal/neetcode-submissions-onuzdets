class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let ans = []

        for(let i =0; i<n; i++){
            let prod = 1
            for(let j = 0; j<n; j++){
                if(i !== j){
                    prod *= nums[j]
                }
            }
            ans[i] = prod
        }
        return ans
    }
}
