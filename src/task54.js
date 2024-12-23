//54.Write a JavaScript program to count the number of vowels in a given string.
function vowels(x) {
    let count = 0;
    let arr = x.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            count++
        };
    };
    console.log(count);
};

vowels("georgia"); // 4
vowels("natural"); // 3
vowels("Twyndyllyngs"); // 0
vowels("euouae"); // 6