interface Pair {
    num: number;
    freq: number;
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const indexToSkip = new Set();
        const pairs: Pair[] = [];
        for (var i = 0; i < nums.length; i++) {
            if (indexToSkip.has(i)) continue;
            const num = nums[i];
            let freq = 1;
            for (var j = i + 1; j < nums.length; j++) {
                if (num === nums[j]) {
                    freq++;
                    indexToSkip.add(j);
                }
            }
            pairs.push({ num, freq });
        }
        const simpler = pairs
            .sort((a, b) => {
                return b.freq - a.freq;
            })
            .map((p) => p.num);
        console.log({pairs, simpler});
        const result = [];
        for (var x = 0; x < k; x++) result.push(simpler[x]);
        return result;
    }
}
