/*74.Write a JavaScript program to find the largest value between the first and last elements and set
all the other elements to that value. Display the updated array.*/
function findBig(x) {
    let bigOne = x[0];
    for(let i = 0; i < x.length; i++) {
        if((x[i] < x[i + 1]) && (x[i + 1] > bigOne)) {
            bigOne = x[i + 1];

        };
    };
    return bigOne;
};

function sameElements(nums) {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        arr.push(findBig(nums));
    };

    return arr;
};

console.log(sameElements([90, 2000, 70, 4000, 500])) // [ 4000, 4000, 4000, 4000, 4000 ]
console.log(sameElements([9, 2, 7, 4, 15])) // [ 15, 15, 15, 15, 15 ]