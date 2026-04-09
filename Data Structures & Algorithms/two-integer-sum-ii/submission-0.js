class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length
        let i =0, j = n-1

        while(i < j){
            let sum = nums[i]+nums[j]
            if(sum === target) return [i+1, j+1]
            else if(sum > target) j--
            else i++
        }
    }
}
