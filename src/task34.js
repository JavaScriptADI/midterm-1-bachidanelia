//34.Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
function compareTwo(a, b) {
    if ((40 < a && a < 60) && ((40 < b && b < 60))) {
        if(a > b) {
            console.log(`${a} is bigger`);
        } else {
            console.log(`${b} is bigger`);
        };
    } else {
        console.log(`Both numbers are out of range between 40 and 60`);
    };
};

compareTwo(45, 55); // 55 is bigger
compareTwo(57, 43); // 57 is bigger
compareTwo(30, 100); // Both numbers are out of range between 40 and 60