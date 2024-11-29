/*68.Write a JavaScript program to create a new string using the first and last n characters from a given string.
The string length must be larger than or equal to n.*/
function strEnds(a, b) {
    if (a.length >= b) {
        let first = a.slice(0, 1);
        let last = a.slice(a.length - 1);
        let fin = first.concat(last);
        console.log(fin);
        return fin;
    };
};

strEnds("papaya", 6); // pa
strEnds("development", 7); // dt