//25.Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function checkForMultiple(x) {
    if ((x % 3 === 0) || (x % 7 === 0)) {
        console.log(`Yes, ${x} is a multiple of 3 or 7`);
    } else {
        console.log(`No. ${x} is not a multiple of 3 or 7`);
    };
};

checkForMultiple(21); // Yes, 21 is a multiple of 3 or 7
checkForMultiple(12); // Yes, 21 is a multiple of 3 or 7
checkForMultiple(16); // No. 16 is not a multiple of 3 or 7
checkForMultiple(20); // No. 20 is not a multiple of 3 or 7