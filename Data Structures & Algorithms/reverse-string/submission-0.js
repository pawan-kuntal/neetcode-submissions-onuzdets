class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n = s.length
        let i =0, j = n-1

        while(i < j){
            [s[i], s[j]] = [s[j], s[i]]
            i++, j--
        }
    }
}
