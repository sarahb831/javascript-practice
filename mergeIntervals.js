var mergeIntervals = function(intervals) {
    if (intervals.length === 0) return [];

    // sort if not explicitly stated
    intervals.sort((a,b) => {
        return (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    })

    let i = 0;
    let start = intervals[0][0];
    let end = intervals[0][1];
    let merged = [];

    while (i < intervals.length) {
        if (intervals[i][0] < end) {
            end = Math.max(end, intervals[i][1]);
        } else {
            merged.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
        i++;
    }
    merged.push([start, end]);
    return merged;
}

let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(mergeIntervals(intervals));