//75.Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
function midNum(a, b) {
    let arr = [a[1], b[1]];
    return arr;
};

let arrOne = [1, 2, 3];
let arrTwo = [4, 5, 6];

console.log(midNum(arrOne, arrTwo)); // [ 2, 5 ]