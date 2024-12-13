//73.Write a JavaScript program to reverse the elements of a given array of integers of length 3.
function reverseArray(x) {
    let reversed = [];

    for(let i = x.length - 1; i >= 0; i--) {
        reversed.push(x[i]);
    };

    //console.log(reversed);
    return reversed;
};

//reverseArray([1, 2, 3]);
//reverseArray([4, 5, 6]);

console.log(reverseArray([1, 2, 3])); // [ 3, 2, 1 ]
console.log(reverseArray([4, 5, 6])); // [ 6, 5, 4 ]