class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let n = nums.length
        let i =0, j = 0, k = n-1

        while(j <= k){
            if(nums[j] === 0){
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++, j++
            }else if(nums[j] === 1) j++
            else{
                [nums[j], nums[k]] = [nums[k], nums[j]]
                k--
            }
        }
    }
}
