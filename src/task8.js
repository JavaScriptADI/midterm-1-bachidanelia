/*8.Write a JavaScript program where the program takes a random integer between 1 and 10,
and the user is then prompted to input a guess number. 
The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".*/

function match() {
    let ranNum = Math.floor(Math.random() * 10 + 1);
    let userNum = prompt();
    console.log(`Random Number Was ${ranNum} and your number was ${userNum}`);
    if (ranNum == userNum) {
        console.log("Good Work");
    } else {
        console.log("Not matched");
    };
};

match();