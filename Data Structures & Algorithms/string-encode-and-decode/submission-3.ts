class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        var result = "";
        for (var str of strs) {
            result += str.length;
            result += "#";
            result += str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        var result = [];

        let i = 0;
        while (i < str.length) {
            let j = i + 1;
            while (str[j] !== "#") j++;
            const len = parseInt(str.slice(i, j));
            const word = str.slice(1 + j, 1 + j + len);
            result.push(word)
            i = 1 + j + len;
        }

        return result;
    }
}
