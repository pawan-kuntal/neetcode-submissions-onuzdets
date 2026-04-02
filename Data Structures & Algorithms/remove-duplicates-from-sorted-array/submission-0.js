class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let n = nums.length
        let i =0

        for(let j =0; j<n; j++){
            if(nums[i] !== nums[j]){
                i++
                nums[i] = nums[j]
            }
        }
        return i+1
    }
}
