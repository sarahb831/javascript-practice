
var numIslandsBFS = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    let islandsCount = 0;
    let nr = grid.length;
    let nc = grid[0].length;
    
    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            let neighbors = [];
            if (grid[r][c] === '1') {
                ++islandsCount;
                grid[r][c] = '0';
                neighbors.push(r*nc+c);
                while (neighbors.length > 0) {
                    let id = neighbors.shift();
                    let row = (id/nc) | 0;
                    let col = id%nc;
                    console.log('in while',id, nc, row, col)

                    if (row - 1 >= 0 && grid[row-1][col] === '1') {
                        neighbors.push((row-1)*nr+col);
                        grid[row-1][col] = '0';
                    }
                    if (row + 1 < nr && grid[row+1][col] === '1') {
                        neighbors.push((row+1)*nr+col);
                        grid[row+1][col] = '0';
                    }
                    //console.log('row, col-1', row, col-1)
                    if (col - 1 >= 0 && grid[row][col-1] === '1') {
                        neighbors.push(row*nr+(col-1));
                        grid[row][col-1] = '0';
                    }
                    if (col + 1 < nc && grid[row][col+1] === '1') {
                        neighbors.push(row*nr+(col+1));
                        grid[row][col+1] = '0';
                    }
                }
            }
        }
    }
    return islandsCount;
};

const grid = [["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]];
let answer = numIslandsBFS(grid);
console.log(answer);