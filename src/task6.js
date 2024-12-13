//6.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
function isThisYearLeap(x) {
    if ((((x % 4) == 0) && ((x % 100) != 0)) || ((x % 400) == 0)) {
        console.log(`${x} is a leap year.`);
    } else {
        console.log(`${x} is not a leap year.`);
    };
};

isThisYearLeap(1900); // 1900 is not a leap year.