//86.Write a JavaScript program to find the types of a given angle.
function typeOfAngle(x) {
    if (0 < x && x < 90) {
        console.log("Acute angle.");
    } else if (x === 90) {
        console.log("Right angle.");
    } else if (90 < x && x < 180) {
        console.log("Obtuse angle.");
    } else if (x === 180) {
        console.log("Straight angle.");
    } else if (180 < x && x < 360) {
        console.log("Reflex angle.");
    } else if (x === 360) {
        console.log("Full turn.");
    } else {
        console.log("something is wrong")
    };
};

typeOfAngle(90); // Right angle.
typeOfAngle(180); // Straight angle.
typeOfAngle(360); // Full turn.
typeOfAngle(76); // Acute angle.
typeOfAngle(156); // Obtuse angle.