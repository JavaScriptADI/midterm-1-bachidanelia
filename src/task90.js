//90.Write a JavaScript program to find the the greatest element in a given array of integers.
function greatest(x) {
    let biggest = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] > biggest) {
            biggest = x[i];
        };
    };

    return biggest;
};

let numbers = [42, 17, 63, 94, 28, 35, 76, 59, 81, 20];

console.log(greatest(numbers)); // 94