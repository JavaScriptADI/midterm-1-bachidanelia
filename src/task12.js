//12.Write a JavaScript program to get the website URL (loading page).
function getURL() {
    let url = document.getElementById("body").innerHTML = window.location.href;
    console.log(url);
};

getURL();