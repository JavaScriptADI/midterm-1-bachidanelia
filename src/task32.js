//32.Write a JavaScript program to find the closest value to 100 from two numerical values.

function findCloser(a, b) {
    let diffA = 0;
    let diffB = 0;
    if (a > 100) {
        diffA = (a - 100);
    } else {
        diffA = (100 - a);
    };

    if (b > 100) {
        diffB = (b - 100);
    } else {
        diffB = (100 - b);
    };
    

    if (diffA < diffB) {
        console.log(`${a} is closer to 100.`)
    } else {
        console.log(`${b} is closer to 100.`)
    };
};

findCloser(90, 140); // 90 is closer to 100.
findCloser(60, 190); // 60 is closer to 100.
findCloser(20, 160); // 160 is closer to 100.
findCloser(5, 190); // 190 is closer to 100.