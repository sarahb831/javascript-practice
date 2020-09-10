// numIslands.js

const { join } = require("path");

var dfs = function(grid, r, c) {
    const nr = grid.length;
    const nc = grid[0].length;
    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] === '0') {
        return;
    }
    grid[r][c] = '0';
    dfs(grid, r+1, c);
    dfs(grid, r-1, c);
    dfs(grid, r, c+1);
    dfs(grid, r, c-1);
};

var numIslands = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    const nr = grid.length;
    const nc = grid[0].length;
    var islandsCount = 0;
    
    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            if (grid[r][c] === '1') {
                islandsCount++;
                dfs(grid, r, c);
            }
        }
    }
    return islandsCount;
};

const grid = [["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]];
let answer = numIslands(grid);
console.log(answer);