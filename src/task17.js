/*17.Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple the absolute difference if the specified number is greater than 19.*/
function someNum(x) {
    let variable = 0;
    if (x > 19){
        variable = Math.pow((x - 19), 3);
    } else {
        variable = (19 - x);
    };
    console.log(variable);
    return variable;
};

someNum(22); // 27
someNum(17); // 2