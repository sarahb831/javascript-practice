const numIslandsBFS3 = grid => {
    if (grid === null || grid.length < 1) {
        return 0;
    }
    
    let numRows = grid.length;
    let numCols = grid[0].length;
    let count = 0;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            let queue = [];
            console.log(i,j, grid[i][j]);
            if (grid[i][j] === '1') {
                let index = i * numCols + j;
                queue.push(index);
                grid[i][j] = '0';
                count++;
                console.log(index, queue, count)
                while (queue.length > 0) {
                    index = queue.pop();
                    let row = (index / numCols) | 0;
                    let col = index % numCols;
                    if (row - 1 >= 0 && grid[row - 1][col] === '1') {
                        queue.push((row - 1) * numCols + col);
                        grid[row - 1][col] = '0';
                    }
                    if (row + 1 < numRows && grid[row + 1][col] === '1') {
                        queue.push((row + 1) * numCols + col);
                        grid[row + 1][col] = '0';
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] === '1') {
                        queue.push((row) * numCols + col - 1);
                        grid[row][col - 1] = '0';
                    }
                    if (col + 1 < numCols && grid[row][col + 1] === '1') {
                        queue.push(row * numCols + col + 1);
                        grid[row][col + 1] = '0';
                    }
                }
            }
        }
    }
    return count;
}

const grid = [["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]];
let answer = numIslandsBFS3(grid);
console.log(answer);