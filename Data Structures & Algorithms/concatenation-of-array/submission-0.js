class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length
        let ans = []

        for(let i =0; i<n; i++){
            ans.push(nums[i])
        }
        let result = ans
        let m = ans.length
        for(let i =0; i<m; i++){
            result.push(ans[i])
        }
        return result
    }
}
