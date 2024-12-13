/*58.Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string.
The string length must be 3 and above*/
function copyEnd(x) {
    let str = x.slice(-3);
    for (let i = 0; i < 4; i++) {
        console.log(str);
    };
};

copyEnd("wallet"); // let let let let
copyEnd("menthol"); // hol hol hol hol