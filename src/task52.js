//52.Write a JavaScript program to convert letters of a given string alphabetically.
function convertString(x) {
    let arr = x.split("").sort();
    console.log(arr.join(""));
};

convertString("radar"); // aadrr
convertString("hotdog"); // dghoot