/*23.Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
The string length must be broader than or equal to 1.*/
function rotateLetters(x) {
    let variable = x.slice(1, (x.length -1));
    let firstLetter = x[0];
    let lastLetter = x[x.length - 1];
    variable = lastLetter.concat(variable).concat(firstLetter);
    console.log(variable);
    return variable;
};

rotateLetters("computer"); // romputec
rotateLetters("spongebob"); // bpongebos