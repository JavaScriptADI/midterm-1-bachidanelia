/*26.Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters
and adding them at both the front and back. The string length must be 3 or more.*/
function addMoreToEnds(x){
    let lastThreeLetters = x.slice(x.length - 3);
    let word = lastThreeLetters.concat(x).concat(lastThreeLetters);
    console.log(word);
    return word;
};


addMoreToEnds("Pardon"); // dowwindowdow
addMoreToEnds("dron"); // rondronron
addMoreToEnds("Abandon"); // donAbandondon
addMoreToEnds("Armageddon"); // donArmageddondon