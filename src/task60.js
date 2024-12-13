//60.Write a JavaScript program to create a new string without the first and last characters of a given string.
function removeLetters(x) {
    let str = x.slice(1);
    str = str.slice(0, -1);
    console.log(str);
};

removeLetters("longer"); // onge
removeLetters("screen"); // cree