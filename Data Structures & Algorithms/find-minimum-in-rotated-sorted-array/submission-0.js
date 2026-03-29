class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums.length
        let i =0, j = n-1

        while(i<j){
            let mid = Math.floor(i+(j-i)/2)
            
            if(nums[mid] > nums[j]){
                i = mid+1
            }else j = mid
        }
        return nums[i]
    }
}
