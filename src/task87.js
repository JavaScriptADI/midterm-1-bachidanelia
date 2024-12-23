/*87.Write a JavaScript program to determine if two arrays of integers of the same length are similar.
The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.*/
function compareArr(a, b) {
    let numOfMatch = 0;
    for (let i = 0; i < a.length; i++) {
        if(a[i] === b[i]) {
            numOfMatch += 1;
        };
    };
    
    if (numOfMatch === a.length) {
        console.log('Both arrays are similar.');
    } else {
        console.log('Arrays are not matching.');
    };
};

let firstArr = [34, 67, 12, 89, 45, 23, 56, 78, 90, 11];
let secondArr = [34, 67, 12, 89, 45, 23, 56, 78, 90, 11];
let thirdArr = [42, 17, 63, 94, 28, 35, 76, 59, 81, 20];

compareArr(firstArr, secondArr); // Both arrays are similar.
compareArr(secondArr, thirdArr); // Arrays are not matching.