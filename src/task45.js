//45.Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
function numCheck(a, b) {
    if ((a === 15 || b === 15) || ((a + b) === 15) || (((a - b) === 15) || ((b - a) === 15))) {
        return true;
    } else {
        return false;
    };
};

console.log(numCheck(5, 21)); // false
console.log(numCheck(10, 5)); // true
console.log(numCheck(15, 50)); // true
console.log(numCheck(20, 5)); // true