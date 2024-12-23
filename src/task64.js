/*64.Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match,
then remove the characters from the longer string.*/
function twoStrings(a, b) {
    let str = "";
    if (a.length !== b.length) {

        if (a.length > b.length) {
            str = a.slice(0, (b.length));
            console.log(str.concat(b));
        } else {
            str = b.slice(0, (a.length));
            console.log(a.concat(str));
        };

    } else {
        console.log(a.concat(b));
    };
};

twoStrings("car", "sun");           // carsun
twoStrings("more", "pizza");        // morepizz
twoStrings("Development", "sun");   // Devsun