//56.Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
function divNum(a, b) {
    let div = (a / b);
    let format = div.toLocaleString();
    console.log(format);
};

divNum(5000, 2); // 2,500
divNum(1000000, 4); // 250,000