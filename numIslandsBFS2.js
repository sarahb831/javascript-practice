function numIslandsBFS2(grid) {

    if (grid === null || grid.length === 0) {
        return 0;
    }

    const nr = grid.length;
    const nc = grid[0].length;
    let islandCount = 0;

    for (let r = 0; r < nr; r++ ) {
        for (let c = 0; c < nc; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                let queue = [];
                grid[r][c] = '0';
                let index = r * nc + c;
                queue.push(index);
                while (queue.length > 0) {
                    index = queue.shift();
                    let r = (index / nc) | 0; // truncate JS division
                    let c = index % nc;

                    if (r + 1 < nr && grid[r+1][c] === '1') {
                        grid[r+1][c] = '0';
                        queue.push((r+1) * nc + c);
                    }
                    if (r - 1 >= 0 && grid[r-1][c] === '1') {
                        grid[r-1][c] = '0';
                        queue.push((r-1)* nc + c);
                    }
                    if (c + 1 < nc && grid[r][c+1] === '1') {
                        grid[r][c+1] = '0';
                        queue.push(r * nc + c + 1);
                    }
                    if (c-1 >= 0 && grid[r][c-1] === '1') {
                        grid[r][c-1] = '0';
                        queue.push(r * nc + c - 1);
                    }
                }
            }
        }
    }
    return islandCount;
};

const grid = [["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]];
let answer = numIslandsBFS2(grid);
console.log(answer);