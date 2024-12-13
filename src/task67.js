/*67.Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string
if the first or last character is 'P'. Return the original string if the condition is not satisfied.*/
function badP(x) {
    let first = x.slice(0, 1);
    let last = x.slice(-1);

    if ((first === "p") || (last === "p")) {
        let str = x.slice(1, (x.length));
        str = str.slice(0, -1);
        console.log(str);
        return str;
    } else {
        console.log(x)
        return x;
    };
};

badP("pinacolada"); // inacolad
badP("tulip"); // uli
badP("mouse"); // mouse