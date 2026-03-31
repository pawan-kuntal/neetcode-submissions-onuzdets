class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let n = nums.length
        let i =0, j = n-1

        if(nums[0] > nums[1]) return 0
        if(nums[n-1] > nums[n-2]) return n-1

        while(i <= j){
            let mid = Math.floor(i+(j-i)/2)

            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid
            else if(nums[mid] < nums[mid+1]) i = mid+1
            else j = mid-1
        }
        return i
    }
}
