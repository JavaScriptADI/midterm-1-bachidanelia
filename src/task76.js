/*76.Write a JavaScript program to create an array by taking the first and last elements from a given array of integers.
The length must be larger than or equal to 1.*/
function endsMeet(x) {
    let arr = [];
    if (x.length >= 1) {
        arr.push(x[0], x[x.length -1]);
    };
    return arr;
};

console.log(endsMeet([6, 0, 3, 7, 3, 6, 4, 9])); // [ 6, 9 ]