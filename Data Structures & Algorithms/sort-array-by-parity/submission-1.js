class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let n = nums.length
        let i = 0, j = n-1

        while(i < j){
            if(nums[i]%2 === 1 && nums[j]%2 === 0){
                [nums[i], nums[j]] = [nums[j], nums[i]]

                i++, j--
            }if(nums[i]%2 === 0) i++
            if(nums[j] %2 === 1) j--
        }
        return nums
    }
}
