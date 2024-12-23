//72.Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
function sameEnds(x) {
    if(x[0] === x[x.length -1]) {
        console.log(`Yes, the last elements of the array are the same.`);
    } else {
        console.log(`No, the last ellement don't match.`);
    };
};

sameEnds([4, 5, 4]); // Yes, the last elements of the array are the same.
sameEnds([4, 5, 6]); // No, the last ellement don't match.
sameEnds([4, 2, 0]); // No, the last ellement don't match.