/*37.Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
If the string length is less than 3 convert all the characters to upper case.*/
function stringUpDown(x) {
    if (x.length > 3) {
        let first = x.slice(0, 3);
        first = first.toLowerCase();
        console.log(first.concat(x.slice(3)));
    } else {
        console.log(x.toUpperCase());
    };
    
};

stringUpDown("LAZER"); // lazER
stringUpDown("sun"); // SUN