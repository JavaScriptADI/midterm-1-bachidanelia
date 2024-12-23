/*84.Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.*/
function nextCharacter(x) {
    let arr = x.split("");
    let newArr = "";
    
    for (let i = 0; i < x.length; i++) {
        if (arr[i] === "z") {
            arr[i] = "`";
        };

        newArr += String.fromCharCode(arr[i].charCodeAt() + 1);
    };
    
    return newArr;
};

console.log(nextCharacter("zorro")); // apssp
console.log(nextCharacter("zippo")); // ajqqp
console.log(nextCharacter("zipper")); // ajqqfs
console.log(nextCharacter("bazinga")); // cbajohb