class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length
        let col = matrix[0].length

        let i =0, j = row*col -1

        while(i <= j){
            let mid = Math.floor(i+(j-i)/2)

            let r = Math.floor(mid/col)
            let c = mid%col

            let val = matrix[r][c]

            if(val === target) return true
            else if(val > target) j = mid-1
            else i = mid+1
        }
        return false
    }
}
