//55.Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
function pity(x) {
    let countP = 0;
    let countT = 0;
    let arr = x.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "p") {
            countP++;
        } else if (arr[i] === "t") {
            countT++;
        };
    };

    if (countP > countT) {
        console.log(`There are mope "p" in this word.`);
    } else if (countP === countT) {
        console.log(`There are same amount of "p" and "t" in this word.`);
    } else {
        console.log(`There are mope "t" in this word.`);
    }
};

pity("tarantula"); // There are mope "t" in this word.
pity("javascript"); // There are same amount of "p" and "t" in this word.
pity("panasonic"); // There are mope "p" in this word.