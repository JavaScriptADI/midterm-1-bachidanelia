/*Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it to the front.*/
function rotateThis(string) {
    let rotatedString = "";
    for (let i = string.length; i > 0; i--) {
        rotatedString += string[i - 1];
     };
    console.log(rotatedString);
    return rotatedString;
};

rotateThis("radar"); // radar