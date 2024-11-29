//36.Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function checkLast(a, b, c) {
    let first = a.toString().slice(-1);
    let second = b.toString().slice(-1);
    let third = c.toString().slice(-1);

    if (first === second && second === third) {
        console.log(`Yes, last digits are matching: ${first}, ${second}, ${third}.` );
    } else {
        console.log(`No, last digits don't match: ${first}, ${second}, ${third}.`);
    };
};


checkLast(1991, 1882, 1673); // No, last digits don't match: 1, 2, 3.
checkLast(1267, 207, 77); // Yes, last digits are matching: 7, 7, 7.