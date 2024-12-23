/*88.Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either,
two specified integers are similar. Check whether two integers are similar or not.*/
function similarNums(a, b, c) {
    if (a % c === b % c) {
        console.log(`both ${a} and ${b} are similar acording to conditions.`)
    } else {
        console.log(`${a} and ${b} are not similar acording to conditions.`)
    };
};

similarNums(30, 60, 3); // both 30 and 60 are similar acording to conditions.
similarNums(111, 77, 3); // 111 and 77 are not similar acording to conditions.