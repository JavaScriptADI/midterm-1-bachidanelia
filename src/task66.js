//66.Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
function city(x) {
    if((x.slice(0, 3) === "Los") || (x.slice(0, 3) === "New")) {
        console.log(x);
    } else {
        console.log("");
    };
};

city("Los Angeles"); // Los Angeles
city("New Orleans"); // New Orleans
city("Batumi"); // 