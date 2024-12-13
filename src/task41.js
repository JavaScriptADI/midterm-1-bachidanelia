/*41.Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; 
otherwise return 20; and if two numbers are the same return 40.*/
function numbersCheck(a, b, c) {
    if((a === b) && (b === c)) {
        console.log(30);
        return 30;
    } else if ((a === b) || (b === c) || (a === c)) {
        console.log(40);
        return 40;
    } else {
        console.log(20);
        return 20;
    };
};

numbersCheck(7, 7, 7); // 30
numbersCheck(6, 5, 6); // 40
numbersCheck(4, 5, 6); // 20