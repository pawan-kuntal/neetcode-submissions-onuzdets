class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let n = nums.length
        let number = 0, count = 0

        for(let i =0; i<n; i++){
            if(count === 0){
                number = nums[i]
            }if(nums[i] === number) count++
            else count--
        }
        return number
    }
}
