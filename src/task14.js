//14.Write a JavaScript exercise to get the filename extension.
function fileExtension(x) {
    let somefile = x;
    let extension = somefile.substring(somefile.lastIndexOf("."));
    console.log(extension);
};

fileExtension("driving_license.JPEG"); // .JPEG