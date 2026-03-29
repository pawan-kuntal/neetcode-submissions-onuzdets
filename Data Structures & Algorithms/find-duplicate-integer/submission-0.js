class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let n = nums.length
        let set = new Set()

        for(let i =0; i<n; i++){
            if(set.has(nums[i])) return nums[i]
            set.add(nums[i])
        }
    }
}
