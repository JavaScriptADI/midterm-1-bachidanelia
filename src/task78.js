//78.Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
function checkForNum(x) {
    let contains = 0;

    for (let i = 0; i <= x.length; i++) {
        if(x[i] === 1 || x[i] === 3) {
            contains += 1;
        };
    };

    if(contains > 0) {
        console.log(`No, array contains 1 or 3.`);
    } else {
        console.log(`Yes, array does not contains 1 or 3.`);
    };
};

checkForNum([4, 3]); // No, array contains 1 or 3.
checkForNum([1, 7]); // No, array contains 1 or 3.
checkForNum([6, 8]); // Yes, array does not contains 1 or 3.