//39.Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
function compareSum(a, b) {
    let sum = a + b;
    if(50 < sum && sum < 80) {
        return 65;
    } else {
        return 80;
    };
};

console.log(compareSum(40, 30)); // 65
console.log(compareSum(50, 90)); // 80