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
            if(nums[mid] >= nums[i]){
                if(nums[mid] >= target && target >= nums[i]){
                    j = mid-1
                }else i = mid+1
            }else{
                if(nums[mid] <= target && nums[j] >= target){
                    i = mid+1
                }else j = mid-1
            }
        }
        return -1
    }
}
