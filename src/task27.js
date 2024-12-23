//27.Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.
function checkForJava(x) {
    let toAdd = "Java"
    if (x.includes("Java")) {
        console.log(x);
        return x;
    } else {
        console.log(toAdd.concat(x));
        return toAdd.concat(x);
    };
};

checkForJava("JavaScript"); // JavaScript
checkForJava("monitor"); // Javamonitor

