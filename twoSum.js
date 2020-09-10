function twoSum(nums, target) {
    let comp = {};

    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [i, comp[nums[i]]];
        }
        comp[target - nums[i]] = i;
    }
    return [-1,-1];
}

const nums = [2,7,11,15];
const target = 9;

let answer = twoSum(nums, target);
console.log(answer);