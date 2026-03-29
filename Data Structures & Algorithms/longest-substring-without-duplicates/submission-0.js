class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let n = s.length
        let maxL = 0
        let set = new Set()
        let i = 0

        for(let j = 0; j<n; j++){
            while(set.has(s[j])){
                set.delete(s[i])
                i++
            }
            set.add(s[j])
            maxL = Math.max(maxL, j-i+1)
        }
        return maxL
    }
}
