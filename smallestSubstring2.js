// smallestSubstring2.js
// LeetCode #581

function smallestSubstring2(nums) {
    let len = nums.length;
    let r = 0;
    let l = len;
    let stack = [];
    let top = -1; // tracks index for top of stack

    for (let i = 0; i < len; i++) {
        while (top >= 0 && nums[stack[top]] > nums[i]) {
            l = Math.min(l, stack.pop());
            top--;
        }
        stack.push(i);
        top++;
    }

    stack = [];
    top = -1;

    for (let i = len-1; i >= 0; i--) {
        while (top >= 0 && nums[stack[top]] < nums[i]) {
            r = Math.max(r, stack.pop());
            top--;
        }
        stack.push(i);
        top++;
    }
    console.log(l,r);
    return (r > l) ? r - l + 1 : 0;
}

const nums = [2, 6, 4, 8, 10, 9, 15];
let answer = smallestSubstring2(nums);
console.log(answer);

