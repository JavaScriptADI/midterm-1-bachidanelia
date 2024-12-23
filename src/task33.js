//33.Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive
function findRange(a, b) {
    if ((40 < a && a < 60) && ((40 < b && b < 60))) {
        console.log(`Both ${a} and ${b} are in range between 40 and 60.`);
    } else if ((70 < a && a < 100) && ((70 < b && b < 100))) {
        console.log(`Both ${a} and ${b} are in range between 70 and 100.`);
    } else {
        console.log(`Both ${a} and ${b} are out of range.`);
    };
};

findRange(45, 55); // Both 45 and 55 are is range between 40 and 60.
findRange(80, 90); // Both 80 and 90 are is range between 70 and 100.
findRange(30, 110,); // Both 30 and 110 are out of range.