class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length
        let i = 0, j = n-1
        let maxWater = 0
        while(i < j){
            let h = Math.min(heights[i], heights[j])
            let w = j-i
            let currWater = h*w

            maxWater = Math.max(maxWater, currWater)

            if(heights[i] > heights[j]) j--
            else i++

        }
        return maxWater
    }
}
