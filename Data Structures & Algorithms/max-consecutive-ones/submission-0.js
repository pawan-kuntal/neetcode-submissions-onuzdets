class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let n = nums.length
        let max = 0
        let count = 0

        for(let i =0; i<n; i++){
            if(nums[i] === 1){
                count++
                max = Math.max(max, count)
            }else{
                count = 0
            }
        }
        return max
    }
}
