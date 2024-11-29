//7.Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
function findSundayBetween(a, b) {
    for (let i = a; i < b; i++) {
        let firstJan = new Date(i, 0, 1);
        if (firstJan.getDay() === 0) {
            console.log(`1st of January is a Sunday on ${i}`);
        };
    };
};

findSundayBetween(2014, 2050); // 1st of January is a Sunday on 2017 / 2023 / 2034 / 2040 / 2045