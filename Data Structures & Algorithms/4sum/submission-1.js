class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let n = nums.length
        nums.sort((a,b)=>a-b)
        let result = []

        for(let i =0; i<n-3; i++){
            if(i > 0 && nums[i] === nums[i-1]) continue

            for(let j = i+1; j<n-2; j++){
                if(j > i+1 && nums[j] === nums[j-1]) continue

                let p = j+1, q = n-1

                while(p < q){
                    let sum = nums[i] + nums[j] + nums[p] + nums[q]

                    if(sum === target){
                        result.push([nums[i], nums[j], nums[p], nums[q]])

                        while(p < q && nums[p] === nums[p+1]) p++
                        while(p < q && nums[q] === nums[q-1]) q--

                        p++, q--
                    }else if(sum > target) q--
                    else p++
                }
            }
        }
        return result
    }
}
