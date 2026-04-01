class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let n = nums.length
        let i =0

        for(let j = 0; j<n; j++){
            if(nums[j] !== 0){
                nums[i] = nums[j]
                i++
            }
        }
        for(let j = i; j<n; j++){
            nums[j] = 0
        }
    }
}
