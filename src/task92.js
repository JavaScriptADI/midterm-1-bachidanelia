//92.Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
function maxDiff(x) {
    let diffNum = 0;
    
    for (let i = 0; i < x.length; i++) {
        let difference1 = x[i + 1] - x[i];
        let difference2 = x[i] - x[i + 1];
        let bigDiff = Math.max(difference1, difference2)
        if ((bigDiff > diffNum)) {
            diffNum = bigDiff;
        };
    };

    console.log(diffNum);
};

let nums1 = [12, 45, 78, 23, 56, 89, 34, 67, 91, 10];
let nums2 = [5, 18, 33, 72, 41, 64, 29, 87, 53, 90];
let nums3 = [14, 37, 62, 85, 49, 23, 76, 58, 91, 30];

maxDiff(nums1); // 81
maxDiff(nums2); // 58
maxDiff(nums3); // 61