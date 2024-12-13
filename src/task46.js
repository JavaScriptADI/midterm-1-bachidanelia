//46.Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
function numCheck(a, b) {
    if (((a % 7 === 0) || (a % 11 === 0)) && ((b % 7 === 0) || (b % 11 === 0))) {
        return false;
    } else if (((a % 7 === 0) || (a % 11 === 0)) || ((b % 7 === 0) || (b % 11 === 0))) {
        return true;
    } else {
        return false;
    };
};

console.log(numCheck(15, 19)); // false
console.log(numCheck(25, 33)); // true
console.log(numCheck(14, 30)); // true