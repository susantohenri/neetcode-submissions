class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];
        const skip = new Set();
        for (var i = 0; i < strs.length; i++) {
            if (skip.has(strs[i])) continue;
            const res = [];
            const ana1 = strs[i].split('').sort().join();
            for (var j = i + 1; j < strs.length; j++) {
                const ana2 = strs[j].split("").sort().join();
                if (ana1 === ana2) {
                    skip.add(strs[j]);
                    res.push(strs[j]);
                }
            }
            result.push([strs[i], ...res]);
        }
        return result;
    }
}
