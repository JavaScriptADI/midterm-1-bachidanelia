/*Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers.
The array length must be larger than or equal to 1.*/


function findOne(x) {
    if ((x.length >= 1) && ((x[0] === 1) || (x[x.length -1] === 1))) {
        console.log(`Yes, number 1 appears in this array in a first or last position.`);
    } else {
        console.log(`No, number 1 does not appear in this array in a first or last position.`);
    };
};

findOne([1, 2, 4, 5, 7, 8, 0, ]); // Yes, number 1 appears in this array in a first or last position.
findOne([0, 1, 1, 1, 1, 0]); // No, number 1 does not appear in this array in a first or last position.
findOne([4, 5, 6, 7, 1]); // Yes, number 1 appears in this array in a first or last position.
findOne([1]); // Yes, number 1 appears in this array in a first or last position.  