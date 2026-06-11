class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = [];
        for (var i=0; i<nums.length; i++) {
            var res = 1;
            for (var j=0; j<nums.length; j++) {
                if (j == i) continue;
                res *= nums[j];
            }
            result.push(res);
        }
        return result;
    }
}
