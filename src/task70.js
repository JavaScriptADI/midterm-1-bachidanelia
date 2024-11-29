//70.Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
function rotateArr(x) {
    let arr = [];
    for (let i = (x.length - 1); i >= 0; i--) {
        arr.push(x[i]);
    };
    console.log(arr);
};

rotateArr([1, 2, 3]); // [ 3, 2, 1 ]
rotateArr([20, 40, 25, 15]); // [ 15, 25, 40, 20 ]