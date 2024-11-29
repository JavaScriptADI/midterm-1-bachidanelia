//51.Write a JavaScript application that transforms a provided numerical value into hours and minutes.
function makeTime(x) {
    let minutes = (x % 60);
    let hours = Math.floor(x / 60);
    console.log(`It will be ${hours} hours and ${minutes} minutes`);
};

makeTime(200); // It will be 3 hours and 20 minutes
makeTime(500); // It will be 3 hours and 20 minutes
makeTime(420); // It will be 7 hours and 0 minutes