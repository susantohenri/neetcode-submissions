class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // brute force
        /*
        let numLength = nums.length;
        let p1 = 0;
        let containsDuplicate = false;
        while (p1 < numLength) {
            let p2 = p1 + 1;
            while (p2 < numLength) {
                if (nums[p1] === nums[p2]) {
                    containsDuplicate = true;
                }
                p2++;
            }
            p1++;
        }
        return containsDuplicate;
        */

        // hash set
        return new Set(nums).size !== nums.length;
    }
}
