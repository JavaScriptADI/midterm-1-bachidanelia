//16.Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum
function sum(a, b) {
    let variable = 0;
    if (a == b) {
        variable = Math.pow(a, 3);
    } else {
        variable = a + b;
    };
    console.log(variable);
    return variable;
};

sum(3, 7); // 10
sum(3, 3); // 27