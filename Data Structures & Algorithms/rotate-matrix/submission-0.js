class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for(let i =0; i<matrix.length; i++){
            for(let j =i; j<matrix[i].length; j++){
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
        for(let i =0; i<matrix.length; i++){
            let arr = matrix[i]

            let j = 0
            let k = arr.length-1

            while(j<k){
                let temp = arr[j]
                arr[j] = arr[k]
                arr[k] = temp

                j++, k--
            }
        }
        return matrix
    }
}
