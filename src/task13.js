//13.Write a JavaScript exercise to create a variable using a user-defined name.
let userName = prompt("what is your name");
let object = prompt("what do you have in pocket");
let randomObject = {};
randomObject[userName] = object;

console.log(`your name is ${userName} and you have ${randomObject[userName]} in pocket`); //your name is bob and you have ball in pocket