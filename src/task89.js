/*Write a JavaScript program to check whether it is possible to replace $ in a given expression x $ y = z with
one of the four signs +, -, * or / to obtain a correct expression.
For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z*/

function willItWork(x, y, z) {
    if (x * y === z) {
        console.log(`This expression will work with multiplication sign.`);
        return;
    };

    if (x / y === z) {
        console.log(`This expression will work with division sign.`);
        return;
    };

    if (x + y === z) {
        console.log(`This expression will work with plus sign.`);
        return;
    };

    if (x - y === z) {
        console.log(`This expression will work with minus sign.`);
    } else {
        console.log(`This expression will not work with +, -, * or /.`);
    };
};

willItWork(5, 3, 15); // This expression will work with multiplication sign.
willItWork(30, 3, 10); // This expression will work with division sign.
willItWork(50, 30, 80); // This expression will work with plus sign.
willItWork(70, 40, 30); // This expression will work with minus sign.
willItWork(55, 6, 84); // This expression will not work with +, -, * or /.