//48.Write a JavaScript program to reverse a given string.
function reverse(x) {
    let reversed = "";
    for (let i = x.length; i > 0; i--) {
        reversed += x[i - 1];
    };
    console.log(reversed);
};

reverse("spongebob"); // bobegnops
reverse("olimpus"); // supmilo