/*30.Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
If "Script" appears in the string, return the string without "Script" otherwise return the original one.*/
function checkForString(x) {
    const stringToArray = x.split(" ")
    if (stringToArray[4] == "Script") {
        stringToArray.splice(4, 1);
        console.log(stringToArray.join(" "));
        return stringToArray;
    } else {
        console.log(x);
        return x;
    };
};

checkForString("This is a test string"); // This is a test string
checkForString("this is also it Script"); // this is also it 
