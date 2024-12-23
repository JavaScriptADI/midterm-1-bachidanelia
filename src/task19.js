//19.Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function withintwenty(x) {
    if ((80 < x && x < 120) || (380 < x && x < 420)) {
        return true;
    } else {
        return false;
    };
};

console.log(withintwenty(79)); // false
console.log(withintwenty(81)); // true
console.log(withintwenty(119)); // true
console.log(withintwenty(121)); // false
console.log(withintwenty(379)); // false
console.log(withintwenty(381)); // true
console.log(withintwenty(419)); // true
console.log(withintwenty(421)); // false