var subarraySum = function(nums, k) {
    if (nums.length === 0) return 0;

    let sumMap = new Map();
    let count = 0;
    let sum = 0;

    sumMap.set(0,1); // preload for subarrays starting at index 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sumMap.has(sum - k)) {
            count += sumMap.get(sum - k);
        }
        if (sumMap.has(sum)) {
            sumMap.set(sum, sumMap.get(sum)+1);
        } else {
            sumMap.set(sum, 1);
        }
    }
    return count;
};

const nums = [3, 4, 7, 2, -3, 1, 4, 2];
const k = 7;
console.log(subarraySum(nums, k));