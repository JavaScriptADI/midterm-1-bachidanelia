//49.Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function nextLetter(x) {
    let arr = x.split("");
    let newArr = "";
    for (let i = 0; i < x.length; i++) {
        newArr += String.fromCharCode(arr[i].charCodeAt() + 1);
    };
    console.log(newArr);
};

nextLetter("sun"); // tvo
nextLetter("abcd") // bcde