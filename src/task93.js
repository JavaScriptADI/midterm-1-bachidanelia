//93.Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function diffOfAll(x) {
    let max = Math.max(...x)
    let min = Math.min(...x)
    return max - min;
};

let nums1 = [8, 21, 56, 73, 42, 99, 35, 64, 12, 51];
let nums2 = [19, 87, 45, 68, 33, 92, 21, 77, 54, 10];
let nums3 = [11, 64, 3, 80, 56, 27, 93, 14, 67, 99];

console.log(diffOfAll(nums1)); // 91
console.log(diffOfAll(nums2)); // 82
console.log(diffOfAll(nums3)); // 96