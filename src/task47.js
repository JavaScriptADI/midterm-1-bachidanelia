/*47.Write a JavaScript program to check whether a given number exists in the range 40..10000.
For example 40 presents in 40 and 4000*/
function checkNum(x) {
    if(40 <= x && x <= 10000) {
        return true;
    } else {
        return false;
    };
};

console.log(checkNum(50)); // true
console.log(checkNum(700)); // true
console.log(checkNum(30)); // false
console.log(checkNum(1500)); // true
console.log(checkNum(50000)); // false