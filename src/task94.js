//94.Write a JavaScript program to find the number appearing most frequently in a given array of integers.
function sameNum(x) {
    let counter = {};

    x.forEach(x => {
        if (counter[x]) {
            counter[x] += 1;
        } else {
            counter[x] = 1;
        };
    });

    console.log(`Most frequent number is "${Object.keys(counter)[0]}" and it is repeating ${Object.values(counter)[0]} times.`);
};

let nums = [25, 48, 73, 19, 62, 84, 31, 57, 90, 46, 19, 48, 19, 73, 19, 7, 7, 7, 7, 7, 7, 7, 7];

sameNum(nums);