class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let map = new Map()
        for(let i =0; i<s.length; i++){
            let c = s[i]
            if(map.has(c)){
                map.set(c, map.get(c)+1)
            }else{
                map.set(c, 1)
            }
        }

        for(let i =0; i<t.length; i++){
            let c = t[i]
            if(!map.has(c)){
                return false
            }
            map.set(c, map.get(c)-1)

            if(map.get(c) < 0){
                return false
            }
        }
        return true
    }
}
