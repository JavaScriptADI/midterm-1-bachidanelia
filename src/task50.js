//50.Write a JavaScript program to capitalize the first letter of each word in a given string.
function upperCase(x) {
    let words = x.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    };
    console.log(words.join(" "));
};

upperCase("write a javaScript program to capitalize the first letter of each word in a given string");
// Write A JavaScript Program To Capitalize The First Letter Of Each Word In A Given String