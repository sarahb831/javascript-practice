const { INSPECT_MAX_BYTES } = require("buffer");

var subarraySum2 = function(nums, k) {
    let count = 0;
    let arrayMap = new Map();
    let sum = 0;
    arrayMap.set(0,1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (arrayMap.has(sum-k)) {
            count += arrayMap.get(sum-k);
        }
        if (arrayMap.has(sum)) {
            arrayMap.set(sum, arrayMap.get(sum)+1);
        }
        else {
            arrayMap.set(sum, 1);
        }
    }
    return count;
;}


const nums = [3, 4, 7, 2, -3, 1, 4, 2];
const k = 7;
console.log(subarraySum2(nums, k));