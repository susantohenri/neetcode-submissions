interface sums {
    i: number;
    j: number;
    n1: number;
    n2: number;
    sum: number;
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums: number[], target: number): number[] {
        const sums: sums[] = [];
        for (var i = 0; i <= nums.length; i++) {
            for (var j = 0; j <= nums.length; j++) {
                if (target === nums[i] + nums[j] && i !== j) {
                    return [i, j];
                }
            }
        }
    }
}
