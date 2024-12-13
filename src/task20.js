//20.Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function checkNum(a, b) {
    if (a > 0) {
        console.log(`${a} is positive number.`);
    } else {
        console.log(`${a} is a negative number`);
    };
    if (b > 0) {
        console.log(`${b} is positive number.`);
    } else {
        console.log(`${b} is a negative number.`);
    };
};

checkNum(2, 4); // 2 is positive number. // 4 is positive number.
checkNum(-5, 17); // -5 is a negative number. // 17 is positive number.
checkNum(20, -69); // 20 is positive number. // -69 is a negative number.
checkNum(-420, 7) //-420 is a negative number. // -420 is a negative number.