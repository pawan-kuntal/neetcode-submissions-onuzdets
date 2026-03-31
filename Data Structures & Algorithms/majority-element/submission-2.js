class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length
        let map = new Map()

        for(let i =0; i<n; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i])+1)
            }else{
                map.set(nums[i], 1)
            }
            if(map.get(nums[i]) > n/2)
            return nums[i]
        }
    }
}
