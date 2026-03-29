class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let n = s.length
        let stack = []

        for(let i =0; i<n; i++){
            if(s[i] === '('){
                stack.push(')')
            }else if(s[i] === '['){
                stack.push(']')
            }else if(s[i] === '{'){
                stack.push('}')
            }else{
                if(stack.pop() !== s[i]){
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
