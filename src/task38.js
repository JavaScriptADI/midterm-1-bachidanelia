/*38.Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade.
The grading criteria are as follows:
If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater.
Assume that final examination means we pass 'true' as second parameter otherwise blank. If the student achieves an A+ grade,
the program should return 'true'; otherwise, it should return 'false'.*/
function exam(a, b) {
    if((b === true) && (90 <= a && a <= 100)) {
        return true;
    } else if ((b !== true) && (89 <= a && a <= 100)) {
        return true;
    } else {
        return false;
    };
};

console.log(exam(85, false)); // false
console.log(exam(89, false)); // true
console.log(exam(95, true)); // true
console.log(exam(89, true)); // false
