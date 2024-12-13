//22.Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeFrom(a, b) {
    let variable = a.slice(0, b) + a.slice(b + 1);
    console.log(variable);
    return variable;
};

removeFrom("my car", 1); // m car
removeFrom("my car", 2); // mycar
removeFrom("i cant do it", 5); // i can do it

//fist a is a string and second b is location of a character you want to remove.