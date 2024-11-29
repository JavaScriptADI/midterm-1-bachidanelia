//18.Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
function lookingForFifty(a, b) {
    if (((a == 50) || (b == 50)) || ((a + b) == 50)) {
        return true;
    } else {
        return false;
    };
};

console.log(lookingForFifty(25, 26)); // false
console.log(lookingForFifty(25, 25)); // true
console.log(lookingForFifty(50, 25)); // true
console.log(lookingForFifty(25, 50)); // true
console.log(lookingForFifty(24, 26)); // true