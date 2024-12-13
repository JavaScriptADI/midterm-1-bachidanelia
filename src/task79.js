//79.Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
function checkArr(x) {
    let thirty = 0;
    let forty = 0;
    if (x.length >= 2) {
        for(let i = 0; i < x.length; i++) {
            if (x[i] === 30) {
                thirty += 1
            };
            if (x[i] === 40) {
                forty += 1
            };
        };
    };
    
    if(thirty === 2 && forty === 2) {
        console.log(`Yes, array contains 30 and 40 twice.`);
    } else {
        console.log(`No, array does not contains 30 and 40 twice.`);
    }
};

checkArr([20, 30, 40, 50, 30, 40]) // Yes, array contains 30 and 40 twice.
checkArr([20, 30, 40, 50, 60, 50]) // No, array does not contains 30 and 40 twice.
