class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let n = nums.length
        let result = new Array(n)

        let i =0, j = n-1

        for(let k =n-1; k>=0; k--){
            let iSquare = nums[i]*nums[i]
            let jSquare = nums[j]*nums[j]

            if(iSquare > jSquare){
                result[k] = iSquare
                i++
            }else{
                result[k] = jSquare
                j--
            }
        }
        return result
    }
}
