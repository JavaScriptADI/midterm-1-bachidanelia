/*15.Write a JavaScript program to get the difference between a given number and 13,
if the number is broader than 13 return double the absolute difference.*/
function anyNum(x) {
    let difference = 0;
    if (x > 13) {
        difference = (x - 13) * 2;
    } else {
        difference = (13 - x);
    };
    console.log(difference);
};

anyNum(20); // 14
anyNum(10); // 3