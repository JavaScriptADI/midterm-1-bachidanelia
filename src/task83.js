//83.Write a JavaScript program to find the longest string from a given array of strings.
function longestStr(x) {
    let strToNum = [];
    let strLength = 0;
    
    for (let i = 0; i < x.length; i++) {
        strToNum.push(x[i].length);
    };

    for (let i = 0; i <= strToNum.length; i++) {
        if (strToNum[i] > strLength) {
            strLength = strToNum[i];
        };
    };
    
    let index = strToNum.indexOf(strLength);

    console.log(`Longest string is "${x[index]}", which is on position ${index + 1} under index of ${index}.`);
};

let fruits = ["apple", "banana", "cherry", "elderberry"];
let countries = ["Romania", "USA", "France"];
let vegetables = ["carrot", "broccoli", "spinach"];

longestStr(fruits); // Longest string is "elderberry", which is on position 4 under index of 3.
longestStr(countries); // Longest string is "Romania", which is on position 1 under index of 0.
longestStr(vegetables); // Longest string is "broccoli", which is on position 2 under index of 1.