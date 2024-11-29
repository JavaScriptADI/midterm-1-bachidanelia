//59.Write a JavaScript program to extract the first half of a even string.
function extract(x) {
    if((x.length) % 2 === 0) {
        console.log(x.slice(0, (x.length / 2)));
    } else {
        console.log(`That string is not even.`);
    };
};

extract("lamp"); // la
extract("preventability"); // prevent