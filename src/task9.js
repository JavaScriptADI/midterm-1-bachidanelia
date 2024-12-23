//9.Write a JavaScript program to calculate the days left before Christmas.
function beforeChristmas() {
    let now = new Date();
    let christmas = new Date(2024, 11, 25)
    let calculate = Math.floor((christmas.getTime() - now.getTime()) / 1000 / 60 / 60 / 24);
    console.log(`${calculate} Days left before christmas!!!`);
};

beforeChristmas(); // 28 Days left before christmas!!!