function twoSum2(nums, target) {
    if (nums.length < 2) return [];

    let comp = [];

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (comp.hasOwnProperty(complement)) {
            return [comp[complement], i];
        }
        comp[nums[i]] = i;
    }

    return [];
}

let nums = [2,7,11,15];
target = 9;

console.log(twoSum2(nums, target));