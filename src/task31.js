//31.Write a JavaScript program to find the largest of three given integers.
function findGrand(a, b, c) {
    let grand = 0;
    if (a > b && a > c) {
        grand = a;
    } else if (b > a && b > c) {
        grand = b;
    } else {
        grand = c;
    };
    console.log(`Biggest number between: ${a}, ${b}, ${c} is ${grand}`);
};

findGrand(2, 3, 4); //Biggest number between: 2, 3, 4 is 4
findGrand(8, 5, 2); //Biggest number between: 8, 5, 2 is 8
findGrand(3, 9, 5); //Biggest number between: 3, 9, 5 is 9