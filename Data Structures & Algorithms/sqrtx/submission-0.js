class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x < 2) return x

        let i = 1, j = x
        let ans = 0

        while(i <= j){
            let mid = Math.floor(i +(j-i)/2)

            if(mid * mid === x) return mid
            else if(mid * mid > x) j = mid-1
            else{
                ans = mid
                i = mid+1
            }
        }
        return ans
    }
}
