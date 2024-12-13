/*62.Write a JavaScript program to move the last three characters to the start of a given string.
The string length must be greater than or equal to three.*/
function endsMeet(x) {
    if ((x.length) >= 3) {
        let str = x.slice(-3);
        let str2 = str.concat(x);
        console.log(str2);
    } else {
        console.log(`String is too short.`);
    }
    
};

endsMeet("sun"); // sunsun
endsMeet("window"); // dowwindow
endsMeet("ok"); // String is too short.