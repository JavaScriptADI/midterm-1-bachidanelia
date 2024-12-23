/*98.Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
Fox example "Write" will be write and "PHp" will be "PHP"*/
function upDownCase(x) {
    let upper = 0;
    let lower = 0;
    
    for (let i = 0; i < x.length; i++) {
        if (65 <= x.charCodeAt(i) && x.charCodeAt(i) <= 90) {
            upper += 1;
        } else if (97 <= x.charCodeAt(i) && x.charCodeAt(i) <= 122) {
            lower += 1;
        };
    };

    if (upper > lower) {
        console.log(x.toUpperCase());
    } else {
        console.log(x.toLowerCase());
    };
};

upDownCase("Write") // write
upDownCase("PHp") // PHP