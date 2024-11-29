//53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function howFar(a, b, string) {
    for (let i = 0; i < string.length; i++) {
        if(string[i] === a && string[i + 4] === b) {
            return true;
        };
        if(string[i] === b && string[i + 4] === a) {
            return true;
        };
    };
    return false;
};

console.log(howFar("e", "o", "helicopter")); // ture
console.log(howFar("o", "r", "radio")); // true