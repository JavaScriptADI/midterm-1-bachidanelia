//43.Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function rightmost(a, b, c) {
    if (((a % 10) === (b % 10)) && ((b % 10) === (c % 10))) {
        console.log(`All three numbers last digits are the same`);
    } else if (((a % 10) === (b % 10)) || ((b % 10) === (c % 10)) || ((a % 10) === (c % 10))) {
        console.log(`Only two numbers last digits are the same`);
    } else {
        console.log(`Non of the last digits match`);
    }
};

rightmost(33, 193, 903); // All three numbers last digits are the same
rightmost(7, 200, 697); // Only two numbers last digits are the same
rightmost(55, 42, 37); // Non of the last digits match