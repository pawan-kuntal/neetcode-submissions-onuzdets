class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length
        let max = -1

        for(let i = n-1; i>=0; i--){
            let curr = arr[i]
            arr[i] = max

            if(curr > max){
                max = curr
            }
        }
        return arr
    }
}
