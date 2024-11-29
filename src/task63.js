/*63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length.
The string length must be greater than or equal to three.*/
function middle(x) {
    if((x.length % 2 !== 0) && (x.length >= 3)) {
        let str = x.slice(Math.floor(x.length / 2) - 1);
        str = str.slice(0, 3);
        console.log(str);
    } else {
        console.log("String is not matching specifications.");
    };
};

middle("Pizza"); // izz
middle("Genetic"); // net
middle("abandoned"); // ndo
middle("Development"); // lop
middle("more") // String is not matching specifications.