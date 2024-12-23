/*28.Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
Return true if either of them falls within the range.*/
function checkNum(a, b) {
    if ((50 < a && a < 99) || (50 < b && b < 99)) {
        return true;
    } else {
        return false;
    };
};

console.log(checkNum(60, 180)); // true
console.log(checkNum(200, 87)); // true
console.log(checkNum(75, 80)); // true
console.log(checkNum(40, 180)); // false
