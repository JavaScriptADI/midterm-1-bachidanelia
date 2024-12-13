//80.Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function swapEnds(x) {
    let first = x[0];
    let last = x[x.length - 1];
    x[0] = last;
    x[x.length - 1] = first;
    return x;
}

console.log(swapEnds([1, 2, 3, 4, 5])) // [ 5, 2, 3, 4, 1 ]