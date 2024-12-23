/*85.Write a JavaScript program to divide a given array of positive integers into two parts.
First element belongs to the first part, second element belongs to the second part, 
and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.*/
function divideArr(x) {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < x.length; i++) {
        if(i % 2 === 0) {
            arr2.push(x[i]);
        } else {
            arr1.push(x[i]);
        };
    };

    //console.log(arr1)
    //console.log(arr2)
    return [arr2, arr1];
};

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

console.log(divideArr(numArr)); // [ [1,  3,  5,  7,  9, 11, 13, 15, 17, 19], [2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ] ]