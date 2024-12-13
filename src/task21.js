/*21.Write a JavaScript program to create another string by adding "Py" in front of a given string.
If the given string begins with "Py" return the original string.*/
function addToString(x) {
    let toAdd = "Py";
    if (x.includes("Py")) {
        return x;
    } else {
        return toAdd.concat(x);
    };
};


console.log(addToString("Apple")); // PyApple
console.log(addToString("Python")); // Python
console.log(addToString("Car")); // PyCar
console.log(addToString("jamas")); // Pyjamas