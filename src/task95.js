//95.Write a JavaScript program to replace all numbers with a specified number in an array of integers.
function replace(a, b) {
    a = a.map(x => x = b)
    console.log(a)
    return a;
};

let nums1 = [19, 87, 45, 68, 33, 92, 21, 77, 54, 10];

replace(nums1, 8); // [8, 8, 8, 8, 8, 8, 8, 8, 8, 8]