//4.Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function calculateArea(a, b, c) {
    let y = (a + b + c) / 2;
    let area = Math.sqrt(y * ((y - a) * (y - b) * (y - c)));
    console.log(area.toFixed(2));
};

calculateArea(5, 6, 7);