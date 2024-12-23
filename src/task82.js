//82.Write a JavaScript program to add two positive integers without carrying.
function add(a, b) {
    let strA = a.toString();
    let strB = b.toString();
    let result = '';

    let longerNum = Math.max(strA.length, strB.length);

    let padStrA = strA.padStart(longerNum, '0');
    let padStrb = strB.padStart(longerNum, '0');
    
    for (let i = 0; i < longerNum; i++) {
        let nums = parseInt(padStrA[i]) + parseInt(padStrb[i]);
        result += (nums % 10).toString();
    };

    return parseInt(result);
};

console.log(add(70, 30)); // 0
console.log(add(123, 987)); // 0
console.log(add(777, 777)) // 444