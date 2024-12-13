/*29.Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
Return true if one or more of them are in the specified range.*/
function checkMoreNums(a, b, c) {
    if ((50 < a && a < 99) || (50 < b && b < 99) || (50 < c && c < 99)) {
        return true;
    } else {
        return false;
    };
};

console.log(checkMoreNums(75, 900, 660)); // true
console.log(checkMoreNums(750, 90, 660)); // true
console.log(checkMoreNums(750, 900, 66)); // true
console.log(checkMoreNums(7, 900, 660)); // false
console.log(checkMoreNums(750, 9, 660)); // false
console.log(checkMoreNums(750, 900, 6)); // false