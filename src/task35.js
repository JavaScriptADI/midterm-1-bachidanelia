//35.Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
function checkSpecStr(a, b) {
    let someString = a.split("");
    let arr = someString[3];
    if(b === arr) {
        console.log(`Yes, character "${b}" exists between the 2nd and 4th positions in a given string`)
    } else {
        console.log(`No, character "${b}" does not exists between the 2nd and 4th positions in a given string`)
    };
};


checkSpecStr("loudspeaker", "d"); // Yes, character "d exists between the 2nd and 4th positions in a given string
checkSpecStr("camera", "b"); // No, character "b" does not exists between the 2nd and 4th positions in a given string