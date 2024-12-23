//24.Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function addToEnds(x){
    let firstLetter = x[0];
    let newWord = firstLetter.concat(x).concat(firstLetter);
    console.log(newWord);
    return newWord;
};

addToEnds("apple"); // aapplea
addToEnds("playstation"); // pplaystationp