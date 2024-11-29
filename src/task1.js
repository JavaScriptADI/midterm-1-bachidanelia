/*1.Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38 */
function AMPM(hours) {
    if (hours > 12) {
        return "PM";
    } else {
        return "AM";
    };
};

function shortTime(hours) {
    if (hours > 12) {
        return (hours - 12);
    } else {
        return hours;
    };
};

function tellTime(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDay();
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday "];

    const prefix = AMPM(hours);
    const time = shortTime(hours);
    
    console.log(`Today is : ${week[day]}. Current time is : ${time} ${prefix} : ${minutes} : ${seconds}`);
};

tellTime();