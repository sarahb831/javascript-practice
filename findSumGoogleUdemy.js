// brute force

function findSum1(array, num) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] === num - array[j]) return true;
            }
        }
    }
    return false;
}

function findSum2(array, num) {
    let set = new Set();
    for (let i = 0; i < array.length; i++) {
        if (set.has(num - array[i])) {
            return true;
        }
        else {
            set.add(array[i])
        }
    }
    return false;
}

const array1 = [1,2,4,4];
const array2 = [1,2,4,9];

console.log(findSum1(array1, 8));
console.log(findSum2(array1, 8));

console.log(findSum1(array2, 8));
console.log(findSum2(array2, 8));