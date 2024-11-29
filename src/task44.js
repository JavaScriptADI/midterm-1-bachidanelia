/*44.Write a JavaScript program that evaluates three given integers to determine if any one of them
is greater than or equal to 20 and less than at least one of the other two.*/
function evaluate(a, b, c) {
    let theOne = false

    if (a >= 20 && (a < b || a < c)) {
        console.log(`${a} is the chosen one`);
        theOne = true;
    };
    
    if (b >= 20 && (b < a || b < c)) {
        console.log(`${b} is the chosen one`);
        theOne = true;
    };
    
    if (c >= 20 && (c < a || c < b)) {
        console.log(`${c} is the chosen one`);
        theOne = true;
    };

    if (!theOne) {
        console.log(`None of the numbers satisfy criteria`);
    };
};

evaluate(17, 22, 50); // 22 is the chosen one
evaluate(50, 20, 45); // 20 is the chosen one // 45 is the chosen one
evaluate(25, 30, 15); // 25 is the chosen one
evaluate(15, 38, 76); // 38 is the chosen one