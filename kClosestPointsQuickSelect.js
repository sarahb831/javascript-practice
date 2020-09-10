// similar to a binary search, move values greater than at a pivot point to right, less than to left
// when pivot point equals K, return items to left of items
// we only need to calc x**2 + y**2, no sqrt needed

var kClosest = function(points, K) {

    const swap = function(a, b) {
        [points[a], points[b]] = [points[b], points[a]];
    }

    const distance = (point) => {
        return (point[0] * point[0] + point[1] * point[1]);
    }

    const partition = function(low, high) {
        let pivot = (low + high) >> 1;
        while (low <= high) {
            while (distance(points[low]) < distance(points[pivot])) {
                low++;
            }
            while (distance(points[high]) > distance(points[pivot])) {
                high--;
            }
            if (low <= high) {
                swap(low, high);
                low++;
                high--;
            }
            console.log('low, high, pivot, points:', low, high, pivot, points);

        }
        return low;
    }

    const quickSelect = (low, high, K) => {
        if (low >= high) return;
        let partIndex = partition(low, high);
        console.log(partIndex);
        if (partIndex === K - 1) {
            return;
        }
        if (partIndex < K - 1) {
            quickSelect(partIndex + 1, high);
        } else {
            quickSelect(low, partIndex - 1);
        }
    }

    if (K >= points.length) return points;

    quickSelect(0, points.length - 1, K);
    return points.slice(0, K);

}

const points = [[1,3],[-2,2], [5, -1], [-2, 4],[3, 3]];
const K = 3;
console.log(kClosest(points, K));