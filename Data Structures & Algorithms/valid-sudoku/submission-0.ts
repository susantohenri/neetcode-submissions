class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const columns = [];
        const blocks = [[],[],[],[],[],[],[],[],[]];
        for (var row = 0; row < board.length; row++) {
            // validate rows
            if (this.dup(board[row])) {
                return false;
            }

            for (var col = 0; col < board[row].length; col++) {
                const cell = board[row][col];

                // build columns (invert matrix)
                if (!columns[col]) columns[col] = [];
                columns[col].push(cell);

                // build blocks
                const blockNum = this.blockNum(row, col);
                blocks[blockNum].push(cell)
            }
        }

        // validate columns
        for (var column of columns) {
            if (this.dup(column)) return false;
        }

        // validate blocks
        for (var block of blocks) {
            if (this.dup(block)) return false;
        }

        return true;
    }

    private dup(str) {
        for (var i = 0; i < str.length; i++) {
            for (var j = i + 1; j < str.length; j++) {
                if ("." === str[j]) continue;
                if (str[i] === str[j]) return true;
            }
        }
        return false;
    }

    private block(num) {
        if (num < 3) return 1;
        else if (num < 6) return 2;
        else return 3;
    }

    private blockNum (row, col) {
        if (this.block(row) === 1 && this.block(col) === 1) return 0;
        else if (this.block(row) === 1 && this.block(col) === 2) return 1;
        else if (this.block(row) === 1 && this.block(col) === 3) return 2;
        else if (this.block(row) === 2 && this.block(col) === 1) return 3;
        else if (this.block(row) === 2 && this.block(col) === 2) return 4;
        else if (this.block(row) === 2 && this.block(col) === 3) return 5;
        else if (this.block(row) === 3 && this.block(col) === 1) return 6;
        else if (this.block(row) === 3 && this.block(col) === 2) return 7;
        else return 8;
    }
}
