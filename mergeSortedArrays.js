var mergeSortedArrays = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
            k--;
            console.log("i,k:",i,k)
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
            console.log('j,k',j,k)
        }
        console.log(i,j,k,nums1)
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    return nums1;
}

let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m = 3; 
let n = 3;

let answer = mergeSortedArrays(nums1, m, nums2, n);
console.log(answer);