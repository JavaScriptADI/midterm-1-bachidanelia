//61.Write a JavaScript program to concatenate two strings except for their first character.
function connect(a, b) {
    let str1 = a.slice(1);
    let str2 = b.slice(1);
    let str3 = str1.concat(str2);
    console.log(str3);
};

connect("first", "second"); // irstecond
connect("coffee", "tea"); // offeeea