class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let n = nums.length
        let i =0, j = n-1
        while(i <= j){
            let mid = Math.floor(i + (j-i)/2)
            if(nums[mid] === target) return mid
            else if(nums[mid] > target) j--
            else i++
        }
        return -1
    }
}
