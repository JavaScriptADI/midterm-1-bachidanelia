//81.Write a JavaScript program to add two digits to a given positive integer of length two.
function add(x) {
    let source = 0;
    let num1 = 0;
    let num2 = 0;
    source = x.toString();
    num1 = Number(source[0]);
    num2 = Number(source[1]);
    console.log(num1 + num2);
};

add(35); // 8
add(42); // 6