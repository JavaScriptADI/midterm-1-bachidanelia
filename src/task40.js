//40.Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function checkEight(a, b) {
    if((a === 8) || (b === 8)) {
        console.log(`One of two numbers equals to 8.`);
    } else if ((a + b) === 8) {
        console.log(`Sum of two numbers equals to 8.`);
    } else if (((a - b) === 8) || ((b - a) === 8)) {
        console.log(`Difference between two numbers equals to 8.`);
    } else {
        console.log(`Nothing comes close to 8.`)
    };
};

checkEight(4, 8);
checkEight(8, 4);
checkEight(4, 4);
checkEight(28, 20);
