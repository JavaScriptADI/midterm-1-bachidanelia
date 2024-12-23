/*42.Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31*/
function modeCheck(a, b, c) {
    if ((a < b) && (b < c)) {
        console.log(`This is a "strict mode".`);
    } else if ((a <= b) && (b <= c)) {
        console.log(`This is a "soft mode".`);
    } else {
        console.log(`I guess it's caotic.`);
    };
};

modeCheck(50, 150, 400); // This is a "strict mode".
modeCheck(200, 200, 500); // This is a "soft mode".
modeCheck(300, 600, 600); // This is a "soft mode".
modeCheck(420, 69, 888); // I guess it's caotic.