//65.Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function checkStr(x) {
    if(x.length >= 6) {
        let str = x.slice((x.length - 6), (x.length));

        if (str === "script") {
            console.log(`Yes, last 6 characters of ${x} are "script".`);
        } else {
            console.log(`No, ${x} does not contains "script" as last chracters.`);
        };

    } else {
        console.log(`String "${x}" does not match specifications`);
    };
};

checkStr("development"); // No, development does not contains "script" as last chracters.
checkStr("javascript"); // Yes, last 6 characters of javascript are "script".
checkStr("sun"); // String "sun" does not match specifications